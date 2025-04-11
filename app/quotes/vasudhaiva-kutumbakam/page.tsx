import Blockquote from '@/components/BlockQuote'
import Container from '@/components/Container'
import Link from '@/components/Link'

export default function Quote() {
  return (
    <Container>
      <Blockquote className="mb-4">
        अयं निजः परो वेति गणना लघुचेतसाम्।
        <br />
        उदारचरितानां तु वसुधैव कुटुम्बकम्॥
      </Blockquote>
      <p className="mb-4 text-xs text-gray-500">- Upanishad</p>
      <p className="mb-4 text-base">which, according to Wikipedia, literally translates to</p>
      <Blockquote className="mb-4">
        One Is A Relative, The Other Stranger,
        <br />
        Say The Small Minded.
        <br />
        The Entire World Is A Family,
        <br />
        Live The Magnanimous.
      </Blockquote>
      <Link
        className="text-xs text-gray-500"
        href="https://en.wikipedia.org/wiki/Vasudhaiva_Kutumbakam"
      >
        - Wikipedia
      </Link>
      <p className="mt-6 text-base">
        I find this quote to be really beautiful, but I feel that the translation doesn't fully
        capture its depth, which is why I wanted to share my own perspective. The translation makes
        it sound like a prescription for wisdom &mdash; as though declaring the world your family
        and hugging everyone will somehow lead to englightenment.
        <br />
        <br />
        To me, <i>Vasudhaiva Kutumbakam</i> is more of a cautionary tale against adopting rigid{' '}
        <q>for/against</q> stances. Historically, nothing good has ever come out of a{' '}
        <q>with-me-against-me</q> mentality, and this seems even more relevant in today's
        socio-political setup. Time and time again, compromise has been the foundation of peaceful
        coexistence.
        <br />
        <br />
        So, to me, the essence of <i>Vasudhaiva Kutumbakam</i> is not about hugging everyone we
        meet. It is about recognizing the complexity within us all &mdash; understanding that there
        is both good and bad in every individual, and that we're all trying our best. It's about
        acknowledging that there is always another perspective to be considered and that it deserves
        just as much respect as our own.
      </p>
    </Container>
  )
}
