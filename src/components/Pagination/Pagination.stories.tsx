import { Pagination } from "./Pagination"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Molecules/Pagination",
	component: Pagination,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		page: 1,
		pages: 5
	}
}
