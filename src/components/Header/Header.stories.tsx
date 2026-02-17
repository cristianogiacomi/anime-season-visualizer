import { Tv } from "lucide-react"
import { Header } from "./Header"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Organism/Header",
	component: Header,
	parameters: {
		layout: "fullscreen"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Homepage: Story = {
	args: {
		title: "Anime Seasons",
		icon: <Tv size={24} />
	}
}

export const SeasonPage: Story = {
	args: {
		backUrl: "#"
	}
}

export const AnimePage: Story = {
	args: {
		title: "Winter 2025",
		variant: "winter",
		subtitle: "3 series",
		backUrl: "#"
	}
}
