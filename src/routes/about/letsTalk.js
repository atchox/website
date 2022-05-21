import Link from "@mui/material/Link"
import Writing from "../../components/writing"
import { Link as RouterLink } from "react-router-dom"

export default function LetsTalk() {
	return (
		<Writing align="center">
			like what you see?
			<br />
			<Link underline="hover" component={RouterLink} to="/contact">
				let's talk
			</Link>
		</Writing>
	)
}