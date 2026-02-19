import { AnimeCard } from "./AnimeCard"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
	title: "Molecules/AnimeCard",
	component: AnimeCard,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof AnimeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		title: "Froze Hearts Academy",
		id: 234234,
		image: "https://images.unsplash.com/photo-1606388701602-2e3727da5b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzbm93JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2OTEyNzI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		rating: 4.3,
		episodes: 12,
		genres: ["Adventure", "Mystery"],
		isAiring: false
	}
}
