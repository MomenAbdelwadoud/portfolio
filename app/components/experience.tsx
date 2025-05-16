"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";
import {experiences} from "../../lists/experiences-list";
import Open from "./svg/new-window";

const theme = createTheme({
	palette: {
		primary: {
			main: "#B5F4FF",
		},
		secondary: {
			main: "#ffffff",
		},
	},
	typography: {
		fontFamily: "__Inter_9c9965",
	},
});

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const {children, value, index, ...other} = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box className="py-6 px-4">
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

const Experience = () => {
	const isPc = useMediaQuery(theme.breakpoints.up("md"));
	const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<ThemeProvider theme={theme}>
			<motion.section
				initial={{y: 30, opacity: 0}}
				whileInView={{y: 0, opacity: 1}}
				viewport={isPc ? {margin: "0px 0px 0px -300px"} : {margin: "-100px"}}
				transition={{delay: 0.3}}
				className="md:min-h-60vh mb-10 mt-20 scroll-mt-56 md:mt-10"
				id="job">
				<h6 className="mb-6 text-[22px] font-medium uppercase text-secondary lg:mb-10">
					Job Experience
				</h6>
				<div className="lg:flex ">
					<Box sx={{borderBottom: 1, borderColor: "divider"}}>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							textColor="secondary"
							aria-label="Job experience tabs"
							variant="fullWidth"
							orientation={isPc ? "vertical" : "horizontal"}
							className="md:flex-col">
							{experiences.map((exp, idx) => (
								<Tab
									key={exp.company}
									label={exp.company}
									className="font-mono lg:text-left"
								/>
							))}
						</Tabs>
					</Box>
					{experiences.map((exp, idx) => (
						<TabPanel
							value={value}
							index={idx}
							key={exp.company}>
							<div className="flex items-center justify-between pr-4 lg:-mt-8 lg:ml-8">
								<div>
									<h2 className="flex items-center text-lg font-semibold tracking-widest text-white md:text-2xl lg:text-3xl">
										{exp.company}
										{exp.link && (
											<a
												href={exp.link}
												target="_blank"
												rel="noopener noreferrer"
												className="ml-2 text-xs text-gray-400 md:text-sm lg:text-base">
												<Open></Open>
											</a>
										)}
									</h2>
									<p className="text-xs tracking-widest text-gray-300 md:text-base lg:text-lg">
										{exp.role}{" "}
										<span className="ml-2 text-[10px] text-gray-400 md:text-xs lg:text-sm">
											{exp.period}
										</span>
									</p>
									<p className="mt-2 pr-8 text-xs text-gray-300 md:text-sm lg:text-base">
										{exp.description}
									</p>
								</div>
								<Image
									src={exp.image}
									height={isTablet ? "60" : isPc ? "80" : "40"}
									width={isTablet ? "60" : isPc ? "80" : "40"}
									alt={exp.company}
									className="rounded-lg opacity-90"
								/>
							</div>
							<ul className="space-y-2 py-8 px-4 text-xs md:max-w-[80%] md:space-y-6 md:text-base lg:ml-8 lg:py-10">
								{exp.highlights.map((item, i) => (
									<li
										key={i}
										className="list-disc leading-5 tracking-wider">
										{item}
									</li>
								))}
							</ul>
						</TabPanel>
					))}
				</div>
			</motion.section>
		</ThemeProvider>
	);
};

export default Experience;
