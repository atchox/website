import { SemiBoldLink } from '@/components/Link'
import Tooltip from '@/components/Tooltip'
import Link from '@/components/Link'

const data = {
  Education: [
    ['2026 - Present', 'UZH', 'PhD Systems Biology, started in August 2026'],
    ['2023 - Present', 'ETH Zürich', 'MSc Statistics, started in September 2023'],
    [
      '2020 - 2023',
      'Indian Statistical Institute, Bangalore',
      'BMath (hons.), graduated First Division with Distinction',
    ],
  ],
  'Research Experience': [
    [
      '2025 - Present',
      'Collaborator',
      'I am collaborating with Camilla Beccarini and Dr. Hendrik Wildner from the Zeilhofer group at the Institute of Pharmacology and Toxicology, UZH. I analyse TRAP-seq data from spinal neurons and astrocytes in mice. Our work focuses on identifying sex-specific translatome changes following peripheral nerve injury.',
    ],
    [
      '2024 - 2026',
      'Research Assistant, Robinson Lab, Department of Molecular Life Sciences, UZH',
      <>
        I am supervised by Prof. Dr. Mark Robinson. My work is on benchmarking several aspects of
        single-cell RNA-seq computational pipelines. I do this in the context of{' '}
        <Link href="https://omnibenchmark.org">omnibenchmark</Link>, an open-source platform
        developed at the Robinson lab for{' '}
        <i>"community-driven, extensible and continuously-updating benchmarks"</i>.
        <div className="my-2 flex flex-row divide-x-2 divide-gray-200 dark:divide-gray-600">
          <Link className="px-2" href="https://doi.org/10.64898/2026.05.01.722166">
            scrna-bench preprint
          </Link>
          <Link className="px-2" href="https://github.com/scrna-bench">
            scrna-bench
          </Link>
          <Link className="px-2" href="https://github.com/omni-scrna">
            omni-scrna
          </Link>
        </div>
        In my initial project, I was primarily supervised by Dr. Izaskun Mallona. I built performant
        tools in C++ for high throughput analysis of DNA methylation data computing different types
        of heterogeneity within and across cells. I was involved in the application of such tools in
        the context of benchmarking and data analysis.
        <br />
        <div className="mt-2">
          <Link className="px-2" href="https://github.com/imallona/yamet">
            imallona/<b>yamet</b>
          </Link>
        </div>
      </>,
    ],
    [
      '2025',
      'Semester Paper, Seminar for Statistics, ETHZ',
      'The paper was written under the advisement of Dr. Markus Kalisch.\nIt is a study on intraclass correlation coefficients (ICC) as a measure of reliability. We study the theoretical foundations of different ICCs and some applications in real datasets.',
    ],
    [
      '2024',
      'Semester Paper, Seminar for Statistics, ETHZ',
      'The paper was written under advisement of Dr. Sucharita Ghosh.\nIt is about nonparametric regression on circular covariates. I explored the idea of a varying coefficient model for local regression with circular covariates. I examined the current local polynomial estimator and two similar estimators I proposed. I derived formulas (using the general model) for the estimation of functions under these estimators and for their higher derivatives. I verified my simulations empirically in R with the NPCirc package.',
    ],
    [
      '2022',
      'Gaussian Processes for Pareto Front Estimation in High Dimensional Decision Spaces',
      'We used Gaussian Processes for estimating the Pareto set given training data (usually obtained by solving benchmark problems with NSGA-III or NSGA-II) and test Pareto front data. Gaussian Processes, in this case, have the advantage of not only providing an estimate of the Pareto point but also the uncertainty tied in with it. We adapted and used the walk/pull method from AI Poincaré to combat the sparsity of the high dimensional Pareto set.',
    ],
  ],
  'Work Experience': [
    [
      '2024',
      'Teaching Assistant, D-MATH, ETHZ',
      <>
        Teaching Assistant in the Spring Semester of 2024 for the course{' '}
        <Link href="https://metaphor.ethz.ch/x/2024/fs/401-1152-02L/">
          Linear Algebra II (401-1152-02L)
        </Link>{' '}
        by Prof. Sarah Zerbes. Find my notes <SemiBoldLink href="/teaching/LAII">here</SemiBoldLink>
        .
      </>,
    ],
    [
      '2020 - Present',
      'LIMIT',
      <>
        <Link href="https://www.limitisi.in">LIMIT</Link> is an online mathematics competition
        organized by the students and research scholars of ISI Bangalore. I have the opportunity to
        be a part of the LIMIT team working mainly on the technical and communication teams. I am
        responsible for building and managing the websites such as the portal for registration of
        our candidates and the examination portal.
      </>,
    ],
  ],
  Scholarship: [
    [
      '2020 - Present',
      <>
        <Tooltip text="Kishore Vaigyanik Protsahan Yojana">
          <span>KVPY</span>
        </Tooltip>{' '}
        Fellow
      </>,
      'Awarded the Kishore Vaigyanik Protsahan Yojana scholarship given to top science students by the Govt. of India to motivate interest in research.',
    ],
  ],
  Languages: [
    ['English', 'Native or Bilingual Proficiency'],
    ['Hindi', 'Native or Bilingual Proficiency'],
    ['Bengali', 'Native or Bilingual Proficiency'],
    ['German', 'Elementary Proficiency'],
  ],
}

export default data
