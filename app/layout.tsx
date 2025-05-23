import "./globals.css";
import {Inter} from "@next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang="en"
			className={`bg-[#101010]  ${inter.className} min-h-screen scroll-smooth`}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="gradient py-16 px-[7%] md:px-[10%] lg:px-[20%]">
				{children}
			</body>
		</html>
	);
}
