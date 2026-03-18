import { clsx } from "clsx"
import type { ComponentProps } from "react"
import "./pill.css"

export type PillProps = ComponentProps<"span"> & {
	variant?: "default" | "airing"
}

export function Pill({ className, variant = "default", ...rest }: PillProps) {
	return (
		<span
			className={clsx("pill", className)}
			data-variant={variant}
			{...rest}
		/>
	)
}
