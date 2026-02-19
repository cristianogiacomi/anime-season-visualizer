import { Calendar } from "lucide-react"
import type { Season } from "@/types"
import "./styles.css"

export type SeasonCardProps = {
	season: Season
	year: number
	series: number
}

export function SeasonCard({
	season = "winter",
	year,
	series
}: SeasonCardProps) {
	return (
		<article className="season-card" data-variant={season}>
			<a href="#">
				<div className="season">
					<Calendar size={16} />
					<h3>{season}</h3>
				</div>
				<p className="year">{year}</p>
				<p className="series">{`${series} series`}</p>
			</a>
		</article>
	)
}
