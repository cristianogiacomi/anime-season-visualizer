import clsx from "clsx"
import { Info } from "lucide-react"
import type { ComponentPropsWithRef } from "react"
import "./anime-synopsis.css"

export type AnimeSynopsisProps = ComponentPropsWithRef<"section">

export function AnimeSynopsis({
	children,
	className,
	...rest
}: AnimeSynopsisProps) {
	return (
		<section
			className={clsx("anime-synopsis", className)}
			aria-label="Synopsis"
			{...rest}
		>
			<div className="heading">
				<Info size="16" />
				<h2>Synopsis</h2>
			</div>
			<p>{children}</p>
		</section>
	)
}
