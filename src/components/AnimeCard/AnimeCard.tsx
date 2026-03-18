import { ChevronRight, Star } from "lucide-react"
import { Pill } from "../Pill/Pill"
import "./anime-card.css"

export type AnimeCardProps = {
	title: string
	id: number
	image: string
	rating: number
	episodes: number
	genres?: Array<string>
	isAiring?: boolean
}

export function AnimeCard({
	title,
	id,
	image,
	rating,
	episodes,
	genres,
	isAiring
}: AnimeCardProps) {
	return (
		<article className="anime-card" data-airing={isAiring ? "" : undefined}>
			<a href={id.toString()}>
				<div className="image">
					<img src={image} alt={title} />
				</div>
				<div className="content">
					<h3>{title}</h3>
					<div className="info">
						<div className="rating">
							<Star size={12} />
							<span>{rating}</span>
						</div>
						<span>•</span>
						<span>{`Ep. ${episodes}`}</span>
					</div>
					{genres && (
						<div className="genres">
							{genres.map(genre => (
								<Pill key={genre}>{genre}</Pill>
							))}
						</div>
					)}
				</div>
				<ChevronRight aria-hidden="true" size={16} />
			</a>
		</article>
	)
}
