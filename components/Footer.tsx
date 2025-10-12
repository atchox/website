'use client'

import { useState, useEffect } from 'react'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import axios from '@/data/axiosSetup'

export default function Footer() {
  const [track, setTrack] = useState('')

  useEffect(() => {
    axios
      .get('/music/random')
      .then((data) => {
        setTrack(data.data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <footer>
      <div className="mt-16 mb-4 flex flex-col items-center">
        {track ? (
          <iframe
            title="spotify-soul"
            className="h-20 w-3/5 rounded-xl sm:w-2/5 md:w-3/12"
            src={`https://open.spotify.com/embed/track/${track}?utm_source=generator`}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="h-20" />
        )}
        <Link
          href="https://open.spotify.com/playlist/6V71jM2TJLQOaKVUggztM0"
          className="mt-4 text-red-700"
        >
          source list
        </Link>
        <div className="mt-8 mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
          <SocialIcon kind="letterboxd" href={siteMetadata.letterboxd} size={6} />
        </div>
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
