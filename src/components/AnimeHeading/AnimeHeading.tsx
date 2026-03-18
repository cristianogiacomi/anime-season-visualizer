import { Pill } from "../Pill/Pill"
import type { Genre } from "@/types"
import "./anime-heading.css"

export type AnimeHeadingProps = {
	title: string
	genres?: Array<Genre>
}

export function AnimeHeading({ title, genres }: AnimeHeadingProps) {
	return (
		<div className="anime-heading">
			<h1>{title}</h1>
			{genres && (
				<div className="genres">
					{genres.map(genre => (
						<Pill key={genre.mal_id}>{genre.name}</Pill>
					))}
				</div>
			)}
		</div>
	)
}
