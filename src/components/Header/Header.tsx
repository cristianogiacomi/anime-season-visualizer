import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

import "./styles.css"
import type { Season } from "@/types"

export type HeaderProps = {
	title?: string
	icon?: ReactNode
	subtitle?: string
	backUrl?: string
	variant?: "default" | Season
}

export function Header({
	title,
	icon,
	subtitle,
	backUrl,
	variant = "default"
}: HeaderProps) {
	const hasHeading = title || icon || subtitle

	return (
		<header className="header" data-variant={variant}>
			<div className="container">
				{backUrl && (
					<a
						className="back-link"
						href={backUrl}
						data-variant={
							variant === "default" ? "default" : "negative"
						}
					>
						<ArrowLeft size={16} />
						<span>Back</span>
					</a>
				)}
				{hasHeading && (
					<div className="heading">
						{(title || icon) && (
							<div className="title">
								{icon}
								{title && <h1>{title}</h1>}
							</div>
						)}
						{subtitle && <p className="subtitle">{subtitle}</p>}
					</div>
				)}
			</div>
		</header>
	)
}
