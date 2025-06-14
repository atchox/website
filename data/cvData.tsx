import { SemiBoldLink } from '@/components/Link'
import Tooltip from '@/components/Tooltip'
import Link from '@/components/Link'

const data = {
  Education: [
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
      'Masters Thesis, Seminar for Statistics, ETHZ',
      'I am supervised by Prof. Dr. Fadoua Balabdaoui. I am currently studying single index models under a convexity constraint',
    ],
    [
      '2025 - Present',
      'Collaborator',
      'I am collaborating with Camilla Beccarini and Dr. Hendrik Wildner from the Zeilhofer group at the Institute of Pharmacology and Toxicology, UZH. I analyse TRAP-seq data from spinal neurons and astrocytes in mice. Our work focuses on identifying sex-specific translatome changes following peripheral nerve injury.',
    ],
    [
      '2024 - Present',
      'Research Assistant, Robinson Lab, Department of Molecular Life Sciences, UZH',
      <>
        I am primarily supervised by Dr. Izaskun Mallona. I build and package performant tools in
        C++ for high throughput analysis of DNA methylation data computing different types of
        heterogeneity within and across sequences. Currently, I am involved in the application of
        these tools in simulated and real datasets for the purpose of benchmarking and extracting
        meaningful biological insights.
        <br />
        <Link href="https://github.com/imallona/yamet">
          imallona/<b>yamet</b>
        </Link>
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
      '2023',
      'Hack4Good, Analytics Club, ETHZ',
      'This project is in collaboration with the Centre for Security Studies at ETHZ. We look at night time light data to look for possible correlation with military events in conflict zones like Ukraine. The work done so far involved using simple time series techniques to explore if this was a viable route to explore.',
    ],
    [
      '2022',
      'Gaussian Processes for Pareto Front Estimation in High Dimensional Decision Spaces',
      'We used Gaussian Processes for estimating the Pareto set given training data (usually obtained by solving benchmark problems with NSGA-III or NSGA-II) and test Pareto front data. Gaussian Processes, in this case, have the advantage of not only providing an estimate of the Pareto point but also the uncertainty tied in with it. We adapted and used the walk/pull method from AI Poincaré to combat the sparsity of the high dimensional Pareto set.',
    ],
    [
      '2021',
      'Project for Statistics I Course',
      'Worked on a project for a course to reproduce and extend a research paper, “Is there an Economic Case for Energy Efficient Dwellings in the UK Private Rental Market” by F. Fuerst, M.F.C. Haddad, H. Adan.',
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
  'Academic Achievements': [
    [
      '2022',
      <>
        {'Selected for the '}
        <Tooltip
          text={
            <>
              {'VSRP'}
              <br />
              <Link href="https://www.tifr.res.in/~vsrp">Website</Link>
            </>
          }
        >
          <span>Visiting Students' Research Programme</span>
        </Tooltip>
        {' at '}
        <Tooltip
          text={
            <>
              {'Tata Institute of Fundamental Research'}
              <br />
              <Link href="https://main.tifr.res.in">Website</Link>
            </>
          }
        >
          <span>TIFR-Mumbai</span>
        </Tooltip>
      </>,
    ],
    [
      '2020',
      <>
        {'Selected in all major science and engineering entrance examinations'}
        <br />
        <Tooltip text="Indian Statistical Institute">
          <span>ISI</span>
        </Tooltip>
        {' (Ranked 15), '}
        <Tooltip text="Chennai Mathematical Institute">
          <span>CMI</span>
        </Tooltip>
        {' (Within top 50, qualified with full scholarship),'}
        <br />
        <Tooltip text="Joint Entrance Examination - Advanced">
          <span>JEE Advanced</span>
        </Tooltip>
        {' (Top 1%), '}
        <Tooltip text="Joint Entrance Examination - Mains">
          <span>JEE Mains</span>
        </Tooltip>
        {' (Top 0.5%), '}
        <Tooltip text="West Bengal Joint Entrance Examination">
          <span>WBJEE</span>
        </Tooltip>
        {' (Ranked within top 30)'}
        <br />
        <Tooltip text="Indian Institute of Science and Education Research">
          <span>IISER</span>
        </Tooltip>
        {' Admission Test (Top 0.5%)'}
      </>,
    ],
    [
      '2020',
      'Awarded the Kishore Vaigyanik Protsahan Yojana scholarship, given to top 1800 students by the Govt. of India to motivate interest in research',
    ],
    [
      '2019',
      'Awarded the Kishore Vaigyanik Protsahan Yojana scholarship, given to top 900 students by the Govt. of India to motivate interest in research',
    ],
    [
      '2019',
      'Selected for the Mathematics Talent Reward Programme conducted by ISI Kolkata and attended a 2 day-long camp in ISI, Kolkata',
    ],
    [
      '2015',
      'Secured highest marks in Mathematics in nationally held ASSET Talent Search Examination',
    ],
  ],
  'Other Courses': [
    [
      '2022',
      'MITx: Circuits and Electronics 1',
      <>
        {'Basic Circuit Analysis'}
        <br />
        <Tooltip text="6.002.1x Certificate">
          <Link href="https://courses.edx.org/certificates/0bd617aa481b4ac4a7fc372481a4ad0c">
            Certificate
          </Link>
        </Tooltip>
      </>,
    ],
  ],
  'Software Skills': [
    ['Languages', 'C, C++, R, Python, JavaScript, TypeScript, Bash, LaTeX'],
    ['Databases', 'MongoDB, MySQL'],
    [
      'UI & Web',
      `ReactJS, NextJS, ExpressJS, HTML5, CSS3, Tailwind CSS, Material UI, Django, Directus`,
    ],
    [
      'R Packages',
      'BiocParallel, bookdown, ComplexHeatmap, edgeR, extraDistr, ggplot2, infotheo, lmerTest, markovchain, mgcv, parallel, Rcpp, readxl, rmarkdown, scMET, sechm, SummarizedExperiment, tximport',
    ],
    [
      'Others',
      'CMake, CPack, NodeJS, Docker, Snakemake, quarto, brew, ansible, conda, pyenv, uv, git',
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
