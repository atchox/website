import Container from '@/components/Container'
import Link, { SemiBoldLink } from '@/components/Link'

export default function LAII() {
  return (
    <Container>
      <h1 className="text-7xl">Linear Algebra II</h1>
      <h3 className="mt-2 text-xl text-gray-400">by Prof. Sarah Zerbes</h3>
      <div className="mt-6 flex flex-col gap-2 md:flex-row md:gap-8">
        <div>
          <h6 className="text-2xl">Course Website</h6>
          <Link href="https://metaphor.ethz.ch/x/2023/hs/401-1151-00L/">
            linked here on metaphor
          </Link>
        </div>
        <div>
          <h6 className="text-2xl">Lecture Hours</h6>
          <p className="text-base">
            <b>Wednesdays and Fridays</b> from <b>10:15 to 12:00</b> in <b>HG F 5 and HG F 7</b>
          </p>
        </div>
      </div>
      <h3 className="mt-6 text-5xl">Exercise Hour</h3>
      <p className="mt-1 text-base">
        This page contains all the material I used for the exercise hour.
      </p>
      <h6 className="mt-2 text-xl">Timing</h6>
      <p className="text-base">
        Mondays from <b>14:15 to 16:00</b> in <b>HG G 26.3</b>
      </p>
      <div className="mt-6 flex flex-col gap-6">
        <div>
          <Header>23/02</Header>
          <p className="text-base">We review duals, quotients and determinants.</p>
          <FileList>
            <SemiBoldLink
              href="/static/pdf/FS24-LAII/0/problems.pdf"
              className="px-2"
              type="application/pdf"
            >
              problems
            </SemiBoldLink>
            <SemiBoldLink
              href="/static/pdf/FS24-LAII/0/solutions.pdf"
              className="px-2"
              type="application/pdf"
            >
              solutions
            </SemiBoldLink>
          </FileList>
          <Divider>0</Divider>
        </div>
        <div>
          <Header>26/02</Header>
          <p className="text-base">
            We discuss the questions from the homework. We talk about a general template we usually
            follow for solving these recurrence/induction based determinant computation exercises.
            We also talk briefly about the properties of determinant functions.
          </p>
          <FileList>
            <NotesLink week={1} />
            <ExercisesLink week={1} />
          </FileList>
          <Divider>1</Divider>
        </div>
        <div>
          <Header>04/03</Header>
          <p className="text-base">We discuss the questions from the homework.</p>
          <FileList>
            <NotesLink week={2} />
            <ExercisesLink week={2} />
          </FileList>
          <Divider>2</Divider>
        </div>
        <div>
          <Header>11/03</Header>
          <p className="text-base">
            We discuss the questions from the homework and talk about direct sums.
          </p>
          <FileList>
            <NotesLink week={3} />
            <ExercisesLink week={3} />
          </FileList>
          <Divider>3</Divider>
        </div>
        <div>
          <Header>18/03</Header>
          <p className="text-base">
            We discuss the questions from the homework, talk about the most fundamental properties
            of minimal polynomials and understand the Jordan Normal form and some of its properties
            via examples.
          </p>
          <FileList>
            <NotesLink week={4} />
            <ExercisesLink week={4} />
          </FileList>
          <Divider>4</Divider>
        </div>
        <div>
          <Header>25/03</Header>
          <p className="text-base">
            We discuss the questions from the homework and talk about the basis transformations for
            the Jordan Normal form and Jordan chains via examples. We also discuss some of the key
            results of generalised eigenspaces from the script.
          </p>
          <FileList>
            <NotesLink week={5} />
            <ExercisesLink week={5} />
          </FileList>
          <Divider>5</Divider>
        </div>
        <div>
          <Header>01/04</Header>
          <p className="text-base">No classes due to Easter break.</p>
          <Divider>6</Divider>
        </div>
        <div>
          <Header>08/04</Header>
          <p className="text-base">
            We discuss the questions from the homework and review some ideas from Jordan chains.
          </p>
          <FileList>
            <NotesLink week={7} />
          </FileList>
          <Divider>7</Divider>
        </div>
        <div>
          <Header>15/04</Header>
          <p className="text-base">No classes due to Sechseläuten.</p>
          {/* <FileList>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/8/notes.pdf`}
								type="application/pdf"
								className="text-base"
								underline="none"
							>
								notes
							</Link>
						</FileList> */}
          <Divider>8</Divider>
        </div>
        <div>
          <Header>22/04</Header>
          <p className="text-base">
            We discuss the questions from the homework and discuss the intuition for projections and
            the Gram-Schmidt process.
          </p>
          <FileList>
            <NotesLink week={9} />
          </FileList>
          <Divider>9</Divider>
        </div>
        <div>
          <Header>29/04</Header>
          <p className="text-base">
            We discuss the questions from the homework, the intuition for QR decompositions and how
            inner products help to construct a basis for the dual space.
          </p>
          <FileList>
            <NotesLink week={10} />
          </FileList>
          <Divider>10</Divider>
        </div>
        <div>
          <Header>06/05</Header>
          <p className="text-base">
            We discuss the questions from the homework, the Spectral theorem and the adjugate map.
          </p>
          <FileList>
            <NotesLink week={11} />
          </FileList>
          <Divider>11</Divider>
        </div>
        <div>
          <Header>13/05</Header>
          <p className="text-base">
            We discuss the questions from the homework and have a small discussion on isometries.
          </p>
          <FileList>
            <NotesLink week={12} />
          </FileList>
          <Divider>12</Divider>
        </div>
      </div>
      <h6 className="mt-6 text-xl">Resources</h6>
      <div className="mt-1 flex flex-col gap-2">
        <Link href="https://studycenter.ethz.ch">StudyCenter</Link>
        <Link href="https://exams.vmp.ethz.ch">VMP Exam Collection</Link>
        <p className="text-base">
          If you have any questions regarding course material/assignments/corrections, you can reach
          me anytime by leaving me a message <SemiBoldLink href="/contact">here</SemiBoldLink> (this
          works faster than email ;)). You are always encouraged to leave feedback/suggestions for
          me <Link href="https://forms.gle/kqYUog7mn8tGwMKC8">here on this Google Form.</Link>
        </p>
      </div>
    </Container>
  )
}

const Header = ({ children, ...props }) => (
  <h6 className="mb-1 text-lg font-semibold text-gray-500" {...props}>
    {children}/2024
  </h6>
)

const FileList = (props) => (
  <div className="mt-1 flex flex-row divide-x-2 divide-gray-200 dark:divide-gray-600" {...props} />
)

const NotesLink = ({ week, children = 'notes', ...props }) => (
  <SemiBoldLink
    href={`/static/pdf/FS24-LAII/${week}/notes.pdf`}
    className="px-2"
    type="application/pdf"
    {...props}
  >
    {children}
  </SemiBoldLink>
)

const ExercisesLink = ({ week, children = 'some exercises', ...props }) => (
  <SemiBoldLink
    href={`/static/pdf/FS24-LAII/${week}/exercises.pdf`}
    className="px-2"
    type="application/pdf"
    {...props}
  >
    {children}
  </SemiBoldLink>
)

const Divider = ({ children, ...props }) => (
  <div className="mt-1 mr-4 flex items-center" {...props}>
    <div className="grow-[1] border-t border-gray-600" aria-hidden="true" />
    <span className="text-body1 mx-4 text-left">Week {children}</span>
    <div className="grow-[6] border-t border-gray-600" aria-hidden="true" />
  </div>
)
