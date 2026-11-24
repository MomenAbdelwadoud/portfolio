import {Amiri} from "@next/font/google";

import WordSearch from "./word-search";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export default function WordSearchPage() {
  return (
    <main className={`${amiri.variable} ws-page`}>
      <WordSearch />
    </main>
  );
}
