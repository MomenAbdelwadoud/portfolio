const SITE_URL = "https://momen.codes";
const TITLE = "Momen Abdelwadoud Elkhalifa | Senior Software Developer";
const DESCRIPTION =
  "Portfolio of Momen Abdelwadoud Elkhalifa, a senior software developer building full-stack web platforms with TypeScript, React, Node.js and NestJS. View projects, experience, and contact information.";

export default function Head() {
	return (
		<>
			<title>{TITLE}</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="description" content={DESCRIPTION} />
			<meta
				name="keywords"
				content="Momen Abdelwadoud, Momen Elkhalifa, Momen Abdelwadoud Elkhalifa, Senior Software Developer, Fullstack Developer, Portfolio, React Developer, Next.js Developer, TypeScript Developer, Node.js Developer, Web Developer, Software Engineer"
			/>
			<meta name="author" content="Momen Abdelwadoud Elkhalifa" />
			<meta name="robots" content="index, follow" />
			<meta name="theme-color" content="#101010" />
			<link rel="canonical" href={SITE_URL} />

			<meta property="og:title" content={TITLE} />
			<meta property="og:description" content={DESCRIPTION} />
			<meta property="og:url" content={SITE_URL} />
			<meta property="og:image" content={`${SITE_URL}/profile.jpg`} />
			<meta property="og:image:alt" content="Portrait of Momen Abdelwadoud Elkhalifa" />
			<meta property="og:image:width" content="762" />
			<meta property="og:image:height" content="978" />
			<meta property="og:site_name" content="Momen Abdelwadoud Elkhalifa Portfolio" />
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="en_US" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={TITLE} />
			<meta name="twitter:description" content={DESCRIPTION} />
			<meta name="twitter:image" content={`${SITE_URL}/profile.jpg`} />

			<link rel="icon" href="/favicon.ico" sizes="any" />
		</>
	);
}
