export interface Project {
	title: string;
	tools: string[];
	description: string;
	imgs: string[];
	github?: string;
	live?: string;
}

export const projects: Record<string, Project> = {
	rock: {
		title: "Rock Paper Scissors",
		tools: ["ReactJS", "TailwindCSS"],
		description:
			"A simple responsive solution to the Frontend mentor challenge, Rock Paper Scissors web game against PC",
		imgs: ["rock1.jpg", "rock2.jpg"],
		github: "https://github.com/MomenAbdelwadoud/Rock-Paper-Scissors-Reactjs",
		live: "https://rock-paper-scissors-reactjs.pages.dev/",
	},
	techworks: {
		title: "Techworks platform",
		tools: ["ReactJS", "MUI", "Django"],
		description:
			"A platform to manage Techworks boot-camp attendance, schedules, and scoring system. It also has a feature to send bulk emails",
		imgs: ["techworks1.png", "techworks2.png"],
		github: "https://github.com/MomenAbdelwadoud/Techworks-Platform",
	},
	clinic: {
		title: "Clinic IS dashboard",
		tools: ["NextJS", "Shadcn", "Pocketbase"],
		description:
			"A dashboard to manage patients records for doctors, pharmacists, and accountants",
		imgs: ["clinic1.png", "clinic2.png"],
		github: "https://github.com/MomenAbdelwadoud/Clinic-IS",
	},
};
