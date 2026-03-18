import { fn } from "storybook/test"

import { AnimeSynopsis } from "./AnimeSynopsis"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Molecules/AnimeSynopsis",
	component: AnimeSynopsis,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"],
	args: { onClick: fn() }
} satisfies Meta<typeof AnimeSynopsis>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children:
			"An underdog ice hockey team fights their way to the championship in this intense sports drama."
	}
}
