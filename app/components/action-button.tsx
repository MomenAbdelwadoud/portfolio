"use client";
import {motion} from "framer-motion";
import Open from "./svg/new-window";

const ActionButton = () => {
	return (
		<motion.a
			initial={{y: 10, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{delay: 0.1 * 5}}
			rel="noreferrer"
			target={"_blank"}
			href="https://github.com/MomenAbdelwadoud/">
			<button className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2 px-5 text-sm font-semibold text-black opacity-80">
				<p>View My Github</p>
				<Open></Open>
			</button>
		</motion.a>
	);
};

export default ActionButton;
