"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import {motion} from "framer-motion";

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
				viewport={isPc ? {margin: "0px 0px 0px -400px"} : {margin: "-100px"}}
				transition={{delay: 0.3}}
				className="lg:mt-6"
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
							<Tab
								label="Bloom (YC W22)"
								className="lg:text-left"
							/>
							<Tab
								label="...Your company?"
								disabled
								className="lg:text-left"
							/>
						</Tabs>
					</Box>
					<TabPanel
						value={value}
						index={0}>
						<div className="flex items-center justify-between pr-4 lg:-mt-8 lg:ml-8">
							<div>
								<h4 className="text-lg font-semibold tracking-widest text-white md:text-2xl lg:text-3xl">
									Bloom (YC W22)
								</h4>
								<p className="text-xs tracking-widest text-gray-300 md:text-base lg:text-lg">
									Intern
								</p>
							</div>
							<Image
								src={"/Bloom.jpg"}
								height={isTablet ? "60" : isPc ? "80" : "40"}
								width={isTablet ? "60" : isPc ? "80" : "40"}
								alt={`Bloom (YC W22)`}
								className="rounded-lg opacity-90"></Image>
						</div>
						<ul className="space-y-2 py-8 px-4 text-xs md:max-w-[80%] md:space-y-6 md:text-base lg:ml-8 lg:py-10">
							<li className="list-disc leading-5 tracking-wider">
								Developed in-house admin dashboards/tools that uses
								different APIs.
							</li>
							<li className="list-disc leading-5 tracking-wider">
								Designed and built the company{"'"}s Help Center.
							</li>
							<li className="list-disc leading-5 tracking-wider">
								Worked on customer support self-help strategies.
							</li>
						</ul>
					</TabPanel>
				</div>
			</motion.section>
		</ThemeProvider>
	);
};

export default Experience;
