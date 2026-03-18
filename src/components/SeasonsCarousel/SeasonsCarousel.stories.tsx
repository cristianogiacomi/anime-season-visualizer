import { SeasonCard } from "../SeasonCard/SeasonCard"
import { SeasonsCarousel } from "./SeasonsCarousel"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Organism/SeasonsCarousel",
	component: SeasonsCarousel,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof SeasonsCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	decorators: [
		Story => {
			return (
				<div style={{ width: "80%", marginInline: "auto" }}>
					<Story />
				</div>
			)
		}
	],
	args: {
		children: (
			<>
				<SeasonCard season="fall" year={2025} series={25} />
				<SeasonCard season="summer" year={2025} series={7} />
				<SeasonCard season="spring" year={2025} series={39} />
				<SeasonCard season="winter" year={2025} series={42} />
				<SeasonCard season="fall" year={2024} series={25} />
				<SeasonCard season="summer" year={2024} series={7} />
				<SeasonCard season="spring" year={2024} series={39} />
				<SeasonCard season="winter" year={2024} series={42} />
				<SeasonCard season="fall" year={2023} series={25} />
				<SeasonCard season="summer" year={2023} series={7} />
				<SeasonCard season="spring" year={2023} series={39} />
				<SeasonCard season="winter" year={2023} series={42} />
			</>
		)
	}
}
