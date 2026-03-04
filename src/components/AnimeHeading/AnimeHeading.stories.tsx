import { AnimeHeading } from "./AnimeHeading"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Molecules/AnimeHeading",
	component: AnimeHeading,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"],
	args: {}
} satisfies Meta<typeof AnimeHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		title: "One Punch Man",
		genres: [
			{
				mal_id: 1,
				type: "anime",
				name: "Action",
				url: "https://myanimelist.net/anime/genre/1/Action"
			},
			{
				mal_id: 4,
				type: "anime",
				name: "Comedy",
				url: "https://myanimelist.net/anime/genre/4/Comedy"
			}
		]
	}
}
