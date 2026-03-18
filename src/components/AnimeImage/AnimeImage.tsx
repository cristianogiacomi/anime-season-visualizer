import clsx from "clsx"
import type { ComponentPropsWithRef } from "react"
import "./anime-image.css"

export function AnimeImage({
	className,
	...rest
}: ComponentPropsWithRef<"img">) {
	return <img className={clsx("anime-image", className)} {...rest} />
}
