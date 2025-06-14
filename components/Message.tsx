'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import axios from '@/data/axiosSetup'

type AlertType = {
  message: string
  type: 'success' | 'error'
}

export default function Message() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [alerts, setAlerts] = useState<AlertType[]>([])

  useEffect(() => {
    if (alerts.length === 0) return
    const timeout = setTimeout(() => {
      setAlerts((prev) => prev.slice(0, -1))
    }, 5000)
    return () => clearTimeout(timeout)
  }, [alerts])

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post('/reach', {
        name,
        email: email.toLowerCase().trim(),
        message,
        contacted_at: new Date(),
      })

      if (res.status === 200) {
        setName('')
        setEmail('')
        setMessage('')
        setAlerts((prev) => [{ message: 'Your message has been sent', type: 'success' }, ...prev])
      }
    } catch (error) {
      if (error?.response?.status === 502) {
        setAlerts((prev) => [
          {
            message: 'Uh Oh! My pigeon friend seems unavailable right now. Please try again later?',
            type: 'error',
          },
          ...prev,
        ])
      } else if (error?.response?.status === 504) {
        setAlerts((prev) => [
          {
            message: 'Beep Bop! I feel a little slow right now. Please try again later?',
            type: 'error',
          },
          ...prev,
        ])
      }
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl">
      <form onSubmit={submit} className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="w-full">
            <label>
              <span className="sr-only">Name</span>
              <input
                aria-label="Name"
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="Name"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-emerald-800 focus:ring-emerald-800 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
          </div>
          <div className="w-full">
            <label>
              <span className="sr-only">Email ID</span>
              <input
                aria-label="Email ID"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Email ID"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-emerald-800 focus:ring-emerald-800 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
          </div>
        </div>

        <div>
          <label>
            <span className="sr-only">Message</span>
            <textarea
              aria-label="Message"
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              placeholder="Message"
              rows={4}
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-emerald-800 focus:ring-emerald-800 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={!name || !email || !message || loading}
          className={`inline-flex items-center rounded-md px-4 py-2 text-white transition disabled:cursor-not-allowed disabled:bg-gray-500 ${
            loading ? 'cursor-not-allowed bg-gray-400' : 'bg-emerald-800 hover:bg-emerald-900'
          }`}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      {alerts.length > 0 && (
        <div className="mt-4 space-y-2">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`rounded-md px-4 py-3 text-sm ${
                alert.type === 'success'
                  ? 'bg-emerald-700 text-emerald-200'
                  : 'bg-red-700 text-red-200'
              }`}
            >
              {alert.message}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
