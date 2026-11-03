"use client";
import {motion} from "framer-motion";
import Open from "./svg/new-window";

interface ActionButtonProps {
	href: string;
	label: string;
	variant?: "primary" | "outline";
	showIcon?: boolean;
}

const ActionButton = ({
	href,
	label,
	variant = "primary",
	showIcon = true,
}: ActionButtonProps) => {
	const styles =
		variant === "primary"
			? "bg-primary text-black opacity-80 hover:opacity-100"
			: "border border-gray-500 text-gray-200 hover:border-primary hover:text-white";

	return (
		<motion.a
			initial={{y: 10, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{delay: 0.1 * 5}}
			rel="noreferrer"
			target={href.startsWith("mailto:") ? undefined : "_blank"}
			href={href}
			className={`inline-flex items-center justify-center gap-2 rounded-lg py-2 px-5 text-sm font-semibold transition-all ${styles}`}>
			<span>{label}</span>
			{showIcon && <Open aria-hidden="true"></Open>}
		</motion.a>
	);
};

export default ActionButton;
