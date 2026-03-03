import clsx from "clsx"
import type { ComponentProps } from "react"
import type { Season } from "@/types"

import "./styles.css"

export type ButtonProps = ComponentProps<"button"> & {
	variant?: Season
}

export function Button({
	children,
	className,
	variant = "winter",
	...rest
}: ButtonProps) {
	return (
		<button
			{...rest}
			className={clsx("button", className)}
			data-variant={variant}
		>
			{children}
		</button>
	)
}
