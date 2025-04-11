import { genPageMetadata } from 'app/seo'
import data from '@/data/cvData'
import Container from '@/components/Container'

export const metadata = genPageMetadata({ title: 'CV' })

export default function CV() {
  const headers = Object.keys(data)

  return (
    <Container>
      <h1 className="pt-6 pb-8 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
        CV
      </h1>
      {headers.map((header, index) => (
        <Table header={header} key={index} />
      ))}
    </Container>
  )
}

const Table = ({ header, ...others }) => (
  <table className="mb-10 w-full table-fixed whitespace-pre-line last:mb-0" {...others}>
    <thead className="text-gray-500">
      <tr>
        <th className="indicator w-[26%] pl-0 align-middle sm:w-[22%] md:w-[18%] lg:w-[16%]">
          <span className="block h-1 w-full bg-red-900"></span>
        </th>
        <th className="px-2 text-left text-2xl">{header}</th>
      </tr>
    </thead>
    <tbody>
      {data[header].map((row, index) => (
        <tr key={index}>
          <td className="px-2 py-1 text-right align-top text-base font-semibold text-gray-500">
            {row[0]}
          </td>
          <td className="px-2 py-1 align-top break-words">
            {row.length > 2 ? (
              <>
                <p className="text-lg font-bold">{row[1]}</p>
                <p className="text-base text-gray-400">{row[2]}</p>
              </>
            ) : (
              <p className="text-base">{row[1]}</p>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
