export interface Project {
  title: string;
  tools: string[];
  description: string;
  imgs: string[];
  github?: string;
  live?: string;
}

export const projects: Record<string, Project> = {
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
  image2react: {
    title: "Image2React",
    tools: ["ReactJS", "Tanstack", "AI"],
    description:
      "A tool to convert UI screenshots to React components, configure output (TS/JS, Tailwind/Inline), light/dark mode, and syntax highlighting.",
    imgs: ["image2react1.png", "image2react2.png"],
    github: "https://github.com/MomenAbdelwadoud/Image2React",
  },
  raed: {
    title: "Raed Talent Association Website",
    tools: ["WordPress"],
    description:
      "A website for a client built with WordPress. It features a fully mobile-responsive design and engaging animations.",
    imgs: ["raed1.png", "raed2.png"],
    live: "https://www.mwahib.org.sa/",
  },
  aiAssistant: {
    title: "Simple AI Assistant",
    tools: ["AI", "Linux", "GNOME"],
    description:
      "A Linux GNOME agentic AI extension with command calling features.",
    imgs: ["ai-assistant1.png", "ai-assistant2.png"],
    github: "https://github.com/MomenAbdelwadoud/linux-simple-ai-assistant",
  },
};
