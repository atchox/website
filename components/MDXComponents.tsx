import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import BlockQuote from './BlockQuote'
import TableWrapper from './TableWrapper'
import AuthorNote from './AuthorNote'

export const components: MDXComponents = {
  Image,
  TOCInline,
  AuthorNote,
  a: CustomLink,
  blockquote: BlockQuote,
  pre: Pre,
  table: TableWrapper,
}
