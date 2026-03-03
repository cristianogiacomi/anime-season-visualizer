import clsx from "clsx"
import type { ComponentPropsWithRef, ElementType } from "react"
import type { Season } from "@/types"

import "./styles.css"

type ButtonOwnProps<T extends ElementType> = {
	as?: T
	variant?: Season
}

export type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
	Omit<ComponentPropsWithRef<T>, keyof ButtonOwnProps<T>>

export function Button<T extends ElementType = "button">({
	children,
	as,
	className,
	variant = "winter",
	...rest
}: ButtonProps<T>) {
	const Component = as || "button"

	return (
		<Component
			{...rest}
			className={clsx("button", className)}
			data-variant={variant}
		>
			{children}
		</Component>
	)
}
