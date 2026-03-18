import { Star } from "lucide-react"
import "./anime-details.css"
import { Pill } from "../Pill/Pill"

export type AnimeDetailsProps = {
	rating: number
	season: string
	episodes: number
	airing: boolean
}

export function AnimeDetails({
	rating,
	season,
	episodes,
	airing
}: AnimeDetailsProps) {
	return (
		<section className="anime-details" aria-label="Details">
			<dl>
				<dt>Rating</dt>
				<dd>
					<Star size="16" /> {rating}
				</dd>
				<dt>Season</dt>
				<dd>{season}</dd>
				<dt>Episodes</dt>
				<dd>{episodes}</dd>
				<dt>Status</dt>
				<dd>
					{airing ? (
						<Pill variant="airing"> Airing</Pill>
					) : (
						<Pill>Finished Airing</Pill>
					)}
				</dd>
			</dl>
		</section>
	)
}
