import Box from "@mui/material/Box"
import DefTooltip from "@mui/material/Tooltip"
import ExternalLink from "../../components/externalLink"

const Tooltip = props => (
	<DefTooltip
		arrow
		enterDelay={0}
		leaveDelay={500}
		enterNextDelay={200}
		enterTouchDelay={100}
		leaveTouchDelay={500}
		{...props}
	/>
)

const data = {
	Education: [
		[
			"2020 - Present",
			<>
				<Tooltip
					title={
						<>
							{"ISIBC"}
							<br />
							<ExternalLink href="https://www.isibang.ac.in">Website</ExternalLink>
						</>
					}
				>
					<Box component="span">Indian Statistical Institute, Bangalore</Box>
				</Tooltip>
				<br />
				{"Current CGPA 9.2"}
			</>
		],
		[
			"2018 - 2020",
			<>
				<Tooltip
					title={
						<>
							{"DPSRPK"}
							<br />
							<ExternalLink href="https://www.dpskolkata.com">Website</ExternalLink>
						</>
					}
				>
					<Box component="span">Delhi Public School Ruby Park, Kolkata</Box>
				</Tooltip>
				<br />
				{"95.6% in CBSE 2020"}
			</>
		],
		[
			"2016 - 2018",
			<>
				<Tooltip
					title={
						<>
							{"GHS"}
							<br />
							<ExternalLink href="https://gardenhighschool.in">Website</ExternalLink>
						</>
					}
				>
					<Box component="span">Garden High School, Kolkata</Box>
				</Tooltip>
				<br />
				{"96.4% in ICSE 2018"}
			</>
		]
	],
	"Fellowship / Scholarship": [
		[
			"2020 - Present",
			<>
				<Tooltip title="Kishore Vaigyanik Protsahan Yojana">
					<Box component="span">KVPY</Box>
				</Tooltip>
				{
					" Fellow\nAwarded the Kishore Vaigyanik Protsahan Yojana scholarship given to top science students by the Govt. of India to motivate interest in research"
				}
			</>
		]
	],
	"Academic Achievements": [
		[
			"2022",
			<>
				{"Selected for the "}
				<Tooltip
					title={
						<>
							{"VSRP"}
							<br />
							<ExternalLink href="https://www.tifr.res.in/~vsrp">Website</ExternalLink>
						</>
					}
				>
					<Box component="span">Visiting Students' Research Programme</Box>
				</Tooltip>
				{" at "}
				<Tooltip
					title={
						<>
							{"Tata Institute of Fundamental Research"}
							<br />
							<ExternalLink href="https://main.tifr.res.in">Website</ExternalLink>
						</>
					}
				>
					<Box component="span">TIFR-Mumbai</Box>
				</Tooltip>
			</>
		],
		[
			"2020",
			<>
				{"Selected in all major science and engineering entrance examinations"}
				<br />
				<Tooltip title="Indian Statistical Institute">
					<Box component="span">ISI</Box>
				</Tooltip>
				{" (Ranked 15), "}
				<Tooltip title="Chennai Mathematical Institute">
					<Box component="span">CMI</Box>
				</Tooltip>
				{" (Within top 50, qualified with full scholarship),"}
				<br />
				<Tooltip title="Joint Entrance Examination - Advanced">
					<Box component="span">JEE Advanced</Box>
				</Tooltip>
				{" (Top 1%), "}
				<Tooltip title="Joint Entrance Examination - Mains">
					<Box component="span">JEE Mains</Box>
				</Tooltip>
				{" (Top 0.5%), "}
				<Tooltip title="West Bengal Joint Entrance Examination">
					<Box component="span">WBJEE</Box>
				</Tooltip>
				{" (Ranked within top 30)"}
				<br />
				<Tooltip title="Indian Institute of Science and Education Research">
					<Box component="span">IISER</Box>
				</Tooltip>
				{" Admission Test (Top 0.5%)"}
			</>
		],
		[
			"2020",
			"Awarded the Kishore Vaigyanik Protsahan Yojana scholarship, given to top 1800 students by the Govt. of India to motivate interest in research"
		],
		[
			"2019",
			"Awarded the Kishore Vaigyanik Protsahan Yojana scholarship, given to top 900 students by the Govt. of India to motivate interest in research"
		],
		[
			"2019",
			"Selected for the Mathematics Talent Reward Programme conducted by ISI Kolkata and attended a 2 day-long camp in ISI, Kolkata"
		],
		["2015", "Secured highest marks in Mathematics in nationally held ASSET Talent Search Examination"]
	],
	"Other Courses": [
		[
			"2022",
			<>
				{"MITx 6.002.1x: Circuits and Electronics 1\nBasic Circuit Analysis"}
				<br />
				<Tooltip title="6.002.1x Certificate">
					<ExternalLink href="https://courses.edx.org/certificates/0bd617aa481b4ac4a7fc372481a4ad0c">
						Certificate
					</ExternalLink>
				</Tooltip>
			</>
		]
	],
	"Software Skills": [
		["Languages", "C, C++, Python, JavaScript, R, LaTeX"],
		["Databases", "MongoDB, MySQL"],
		["Others", "ReactJS, NodeJS, ExpressJS, HTML, CSS, Django"]
	],
	Projects: [
		[
			"2021",
			"Project for Statistics I Course\nWorked on a project for a course to reproduce and extend a research paper, “Is there and Economic Case for Energy Efficient Dwellings in the UK Private Rental Market” by F. Fuerst, M.F.C. Haddad, H. Adan."
		],
		[
			"2020 - Present",
			<>
				<Tooltip
					title={
						<>
							{"LIMIT"}
							<br />
							<ExternalLink href="https://www.limitisi.in">Website</ExternalLink>
						</>
					}
				>
					<Box component="span">LIMIT</Box>
				</Tooltip>
				<br />
				{
					"LIMIT is an online mathematics competition organized by the students and research scholars of ISI Bangalore. I have the opportunity to be a part of the LIMIT team working mainly on the technical and communication teams. I am responsible for building and managing the websites such as the portal for registration of our candidates and the examination portal."
				}
			</>
		]
	]
}

export default data