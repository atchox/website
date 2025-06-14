import { genPageMetadata } from 'app/seo'
import Container from '@/components/Container'
import Message from '@/components/Message'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Contact() {
  return (
    <Container>
      <h1 className="pt-6 pb-8 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
        Contact
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-10">
        <p className="text-gray-900 sm:col-span-2 dark:text-gray-100">
          I am always excited to talk about new topics especially if they are unknown to me.
          <br />
          However, I do get a little busy with my academic program sometimes so I apologize in
          advance if it takes me a little longer than usual to reach back.
        </p>
        <Message className="sm:col-span-3" />
      </div>
    </Container>
  )
}
