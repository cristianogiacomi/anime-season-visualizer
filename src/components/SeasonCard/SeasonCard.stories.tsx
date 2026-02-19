import { SeasonCard } from "./SeasonCard"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Molecules/SeasonCard",
	component: SeasonCard,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof SeasonCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		season: "fall",
		year: 2025,
		series: 4
	}
}
