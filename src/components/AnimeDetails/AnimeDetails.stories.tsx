import { AnimeDetails } from "./AnimeDetails"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Molecules/AnimeDetails",
	component: AnimeDetails,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"],
	args: {}
} satisfies Meta<typeof AnimeDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		rating: 8.3,
		season: "Winter 2024",
		episodes: 12,
		airing: false
	}
}
