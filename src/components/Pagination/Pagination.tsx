import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ComponentProps } from "react"
import "./styles.css"

function PaginationBtn(props: ComponentProps<"a">) {
	return (
		<li className="pagination-btn">
			<a {...props} />
		</li>
	)
}

export type PaginationProps = {
	page: number
	pages: number
}

// TODO: manage link
export function Pagination({ page, pages }: PaginationProps) {
	const isFirstPage = page === 1
	const isLastPage = page === pages

	const visiblePages = []
	for (let i = 0; i < pages; i++) visiblePages.push(i + 1)

	return (
		<nav className="pagination" aria-label="Pagination">
			<ul>
				<PaginationBtn
					href="#"
					aria-label="Previous page"
					aria-disabled={isFirstPage ? "true" : undefined}
					rel="prev"
				>
					<ChevronLeft size={16} />
				</PaginationBtn>
				{visiblePages.map(visiblePage => {
					const isCurrentPage = visiblePage === page
					return (
						<PaginationBtn
							href="#"
							aria-label={
								isCurrentPage
									? `Page ${visiblePage}`
									: `Go to page ${visiblePage}`
							}
							aria-current={isCurrentPage ? "page" : undefined}
						>
							{visiblePage}
						</PaginationBtn>
					)
				})}
				<PaginationBtn
					href="#"
					aria-label="Next page"
					aria-disabled={isLastPage ? "true" : undefined}
					rel="next"
				>
					<ChevronRight size={16} />
				</PaginationBtn>
			</ul>
		</nav>
	)
}
