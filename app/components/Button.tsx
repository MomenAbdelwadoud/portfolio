"use client";
import {motion} from "framer-motion";
import Open from "./svg/new-window";

const Button = () => {
	return (
		<motion.a
			initial={{y: 10, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{delay: 0.1 * 5}}
			rel="noreferrer"
			target={"_blank"}
			href="https://drive.google.com/file/d/1XOpq-4yH3Dz3bK_l2kPZHGjPp4vedMzS/view?usp=sharing">
			<button className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2 px-5 text-sm font-semibold text-black opacity-80">
				<p>Open CV</p>
				<Open></Open>
			</button>
		</motion.a>
	);
};

export default Button;
