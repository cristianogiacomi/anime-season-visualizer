import { SeasonHeading } from "./SeasonHeading"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Molecules/SeasonHeading",
	component: SeasonHeading,
	parameters: {
		layout: "fullscreen"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof SeasonHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		heading: "Winter 2026",
		subtitle: "12 currently airing",
		variant: "winter"
	}
}
