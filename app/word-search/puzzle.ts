// Word-search puzzle generation and selection helpers.
// Grid indexing: rows top -> bottom, columns 0 -> 11. Column 0 is rendered at the
// far right (RTL container), so a word written left-to-right in the array is read
// right-to-left on screen — the natural Arabic direction.

export const GRID_SIZE = 12;

export const WORDS = [
  "المؤسسية",
  "الهيكل",
  "التخطيط",
  "التفويض",
  "المساءلة",
  "الأجندة",
  "النصاب",
  "الفريق",
  "الشفافية",
  "اللائحة",
  "التقييم",
  "التشريعية",
];

const FILLERS =
  "ابتثجحخدذرزسشصضطظعغفقكلمنهويأإآؤئةى".split("");

const VARIANTS: Record<string, string> = {
  أ: "ا",
  إ: "ا",
  آ: "ا",
  ٱ: "ا",
  ؤ: "و",
  ئ: "ي",
  ى: "ي",
  ة: "ه",
};

export const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

export function toArabicDigits(n: number): string {
  return String(n)
    .split("")
    .map((d) => (/[0-9]/.test(d) ? ARABIC_DIGITS[Number(d)] : d))
    .join("");
}

/** Folds hamza/alef/teh-marbuta variants so selections match what readers expect. */
export function normalize(s: string): string {
  return s
    .replace(/[\u064B-\u0652\u0670\u06D6-\u06ED]/g, "") // diacritics
    .split("")
    .map((ch) => VARIANTS[ch] ?? ch)
    .join("");
}

export type Cell = { row: number; col: number };
export type Placement = { word: string; cells: Cell[] };
export type Puzzle = { grid: string[][]; placements: Placement[] };

export const DIRECTIONS: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function emptyGrid(): (string | null)[][] {
  return Array.from({ length: GRID_SIZE }, () =>
    Array<string | null>(GRID_SIZE).fill(null)
  );
}

function fits(
  grid: (string | null)[][],
  word: string,
  row: number,
  col: number,
  dr: number,
  dc: number
): boolean {
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) return false;
    const existing = grid[r][c];
    if (existing !== null && normalize(existing) !== normalize(word[i])) {
      return false;
    }
  }
  return true;
}

function attempt(seed: number): Puzzle | null {
  const rand = mulberry32(seed);
  const grid = emptyGrid();
  const placements: Placement[] = [];
  // Longest words first: they are the hardest to fit.
  const words = WORDS.slice().sort((a, b) => b.length - a.length);

  for (const word of words) {
    let placed = false;
    for (let tries = 0; tries < 500 && !placed; tries++) {
      const [dr, dc] = DIRECTIONS[Math.floor(rand() * DIRECTIONS.length)];
      const rowSpan = dr * (word.length - 1);
      const colSpan = dc * (word.length - 1);
      const rowMin = Math.min(0, rowSpan);
      const colMin = Math.min(0, colSpan);
      const row = rowMin + Math.floor(rand() * (GRID_SIZE - Math.abs(rowSpan)));
      const col = colMin + Math.floor(rand() * (GRID_SIZE - Math.abs(colSpan)));
      if (!fits(grid, word, row, col, dr, dc)) continue;
      // Reject placements that would make a different word run through the same cells.
      const cells: Cell[] = [];
      for (let i = 0; i < word.length; i++) {
        cells.push({ row: row + dr * i, col: col + dc * i });
      }
      cells.forEach((cell, i) => {
        grid[cell.row][cell.col] = word[i];
      });
      placements.push({ word, cells });
      placed = true;
    }
    if (!placed) return null;
  }

  const filled = grid.map((line) =>
    line.map((ch) => (ch === null ? FILLERS[Math.floor(rand() * FILLERS.length)] : ch))
  );
  return { grid: filled, placements };
}

/** Deterministic for a given seed; walks seeds until every word fits. */
export function generatePuzzle(seed = 1): Puzzle {
  for (let i = 0; i < 200; i++) {
    const puzzle = attempt(seed + i);
    if (puzzle) return puzzle;
  }
  throw new Error("could not fit all words in the grid");
}

/** Cells of the straight line between two cells, or null when not straight. */
export function lineCells(from: Cell, to: Cell): Cell[] | null {
  const dr = to.row - from.row;
  const dc = to.col - from.col;
  if (dc !== 0 && dr !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
  const steps = Math.max(Math.abs(dr), Math.abs(dc));
  const sr = steps === 0 ? 0 : dr / steps;
  const sc = steps === 0 ? 0 : dc / steps;
  return Array.from({ length: steps + 1 }, (_, i) => ({
    row: from.row + sr * i,
    col: from.col + sc * i,
  }));
}

export function pathToText(grid: string[][], cells: Cell[]): string {
  return cells.map((c) => grid[c.row][c.col]).join("");
}

/** Returns the puzzle word matched by a selection, forward or back-to-front. */
export function matchWord(
  grid: string[][],
  cells: Cell[],
  remaining: string[]
): string | null {
  if (cells.length < 2) return null;
  const text = normalize(pathToText(grid, cells));
  const reversed = text.split("").reverse().join("");
  return (
    remaining.find((w) => normalize(w) === text) ??
    remaining.find((w) => normalize(w) === reversed) ??
    null
  );
}
