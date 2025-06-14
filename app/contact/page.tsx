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
      <Message />
    </Container>
  )
}
