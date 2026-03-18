import type { ReactNode } from "react"
import "./seasons-carousel.css"

export type SeasonsCarouselProps = {
	children: ReactNode
}

export function SeasonsCarousel({ children }: SeasonsCarouselProps) {
	return <div className="seasons-carousel">{children}</div>
}
