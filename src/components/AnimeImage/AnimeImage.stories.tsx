import { AnimeImage } from "./AnimeImage"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Atoms/AnimeImage",
	component: AnimeImage,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"],
	args: {}
} satisfies Meta<typeof AnimeImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		src: "https://myanimelist.net/images/anime/12/76049l.webp"
	}
}
