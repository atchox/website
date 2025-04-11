import Container from '@/components/Container'
import { SemiBoldLink } from '@/components/Link'

export default function Teaching() {
  return (
    <Container>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="pt-6 pb-8 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Teaching
        </h1>
        <div className="py-10">
          <SemiBoldLink href="/teaching/LAII" className="py-2 text-xl">
            LAII - ETHZ FS24 (TA)
          </SemiBoldLink>
        </div>
      </div>
    </Container>
  )
}
