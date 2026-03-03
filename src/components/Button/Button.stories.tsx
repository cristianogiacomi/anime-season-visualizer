import { fn } from "storybook/test"
import { Play } from "lucide-react"

import { Button } from "./Button"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Atoms/Button",
	component: Button,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"],
	args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		variant: "winter",
		onClick: fn(),
		children: (
			<>
				<Play />
				Trailer
			</>
		)
	}
}
