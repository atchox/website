import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Accordion from "@mui/material/Accordion"
import Details from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import { Element } from "react-scroll"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Header from "./header"

export default function FAQ(props) {
	return (
		<Box component={Element} name="faq" {...props}>
			<Header>FAQ</Header>
			<Accordion>
				<Summary>What's it like being tall?</Summary>
				<Details>
					<Typography variant="body1">
						It comes in handy - once I was standing in the back of the Salle des États and could still see the Mona
						Lisa! It can be annoying when you go shopping for pants.
					</Typography>
				</Details>
			</Accordion>
			<Accordion>
				<Summary>Your favourite TV shows?</Summary>
				<Details>
					<List>
						<ListItem>
							<ListItemText primary="Sherlock" />
						</ListItem>
						<ListItem>
							<ListItemText primary="The Newsroom" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Mr. Robot" />
						</ListItem>
					</List>
					<Typography variant="body1">
						These are just 3 names I came up with. I fall in love with every third show I watch.
					</Typography>
				</Details>
			</Accordion>
			<Accordion>
				<Summary>Your favourite music genre?</Summary>
				<Details>
					<Typography variant="body1">
						I don't really have one. It keeps changing with the seasons. Soul, jazz, Bollywood, rock, rap, hiphop, I
						enjoy it all.
					</Typography>
				</Details>
			</Accordion>
			<Accordion>
				<Summary>Top 5 favourite actors?</Summary>
				<Details>
					<List>
						<ListItem>
							<ListItemText primary="Tom Hanks" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Denzel Washington" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Robert De Niro" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Brad Pitt" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Matt Damon" />
						</ListItem>
					</List>
				</Details>
			</Accordion>
			<Accordion>
				<Summary>Top 5 favourite actresses?</Summary>
				<Details>
					<List>
						<ListItem>
							<ListItemText primary="Meryl Streep" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Cate Blanchett" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Anne Hathaway" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Sandra Bullock" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Natalie Portman" />
						</ListItem>
					</List>
				</Details>
			</Accordion>
		</Box>
	)
}

const Summary = ({ children }) => (
	<AccordionSummary>
		<Typography variant="body2">{children}</Typography>
	</AccordionSummary>
)
