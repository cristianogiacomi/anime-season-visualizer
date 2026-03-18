import { Pill } from "./Pill"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Atoms/Pill",
	component: Pill,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Pill>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Adventure"
	}
}
