import { Play } from "lucide-react"
import type { Season } from "@/types"
import "./season-heading.css"

export type SeasonHeadingProps = {
	heading: string
	subtitle: string
	variant?: Season
}

export function SeasonHeading({
	heading,
	subtitle,
	variant = "winter"
}: SeasonHeadingProps) {
	return (
		<div className="season-heading" data-variant={variant}>
			<div className="container">
				<div>
					<h2>{heading}</h2>
					<p>{subtitle}</p>
				</div>
				<div className="live-badge">
					<Play size={12} />
					Live
				</div>
			</div>
		</div>
	)
}
