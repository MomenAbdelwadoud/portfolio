"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import "./word-search.css";

import {
  Cell,
  GRID_SIZE,
  WORDS,
  generatePuzzle,
  lineCells,
  matchWord,
  toArabicDigits,
} from "./puzzle";

const SEEDS = [20261124, 771, 4931, 61207, 88513];
const key = (c: Cell) => `${c.row}-${c.col}`;

export default function WordSearch() {
  const [seedIndex, setSeedIndex] = useState(0);
  const seed = SEEDS[seedIndex % SEEDS.length];
  const puzzle = useMemo(() => generatePuzzle(seed), [seed]);

  const [found, setFound] = useState<Record<string, Cell[]>>({});
  const [anchor, setAnchor] = useState<Cell | null>(null);
  const [path, setPath] = useState<Cell[]>([]);
  const [wrong, setWrong] = useState(0);
  const [shaking, setShaking] = useState(false);
  const anchorRef = useRef<Cell | null>(null);

  useEffect(() => {
    setFound({});
    setPath([]);
    setAnchor(null);
    anchorRef.current = null;
  }, [seed]);

  const foundCells = useMemo(() => {
    const set = new Set<string>();
    Object.keys(found).forEach((word) =>
      found[word].forEach((cell) => set.add(key(cell)))
    );
    return set;
  }, [found]);

  const pathCells = useMemo(
    () => new Set(path.map((cell) => key(cell))),
    [path]
  );

  const foundCount = Object.keys(found).length;
  const solved = foundCount === WORDS.length;

  const cellFromPoint = (x: number, y: number): Cell | null => {
    const el = document.elementFromPoint(x, y);
    const cellEl = el?.closest<HTMLElement>("[data-cell]");
    if (!cellEl) return null;
    return {
      row: Number(cellEl.dataset.row),
      col: Number(cellEl.dataset.col),
    };
  };

  const start = (cell: Cell) => {
    anchorRef.current = cell;
    setAnchor(cell);
    setPath([cell]);
  };

  const extend = (x: number, y: number) => {
    const from = anchorRef.current;
    if (!from) return;
    const to = cellFromPoint(x, y);
    if (!to) return;
    const line = lineCells(from, to);
    if (!line) return;
    setPath(line);
  };

  const commit = () => {
    const cells = path;
    anchorRef.current = null;
    setAnchor(null);
    setPath([]);
    if (cells.length < 2) return;

    const remaining = WORDS.filter((word) => !found[word]);
    const word = matchWord(puzzle.grid, cells, remaining);
    if (!word) {
      setWrong((n) => n + 1);
      setShaking(true);
      window.setTimeout(() => setShaking(false), 420);
      return;
    }
    setFound((prev) => ({ ...prev, [word]: cells }));
  };

  return (
    <div
      dir="rtl"
      className={`ws-card ${shaking ? "ws-shake" : ""}`}
      style={{ fontFamily: "var(--font-arabic), Amiri, 'Noto Naskh Arabic', serif" }}>

      <div className="ws-eyebrow">ابحث عن الكلمات</div>
      <h1 className="ws-title">العمل المؤسسي</h1>
      <p className="ws-sub">
        شبكة ١٢ × ١٢ — الكلمات مخبأة أفقياً من اليمين إلى اليسار، وعمودياً، وقطرياً
      </p>

      <div
        className="ws-grid-wrap"
        role="grid"
        aria-label="شبكة البحث عن الكلمات"
        onPointerDown={(event) => {
          const cellEl = (event.target as HTMLElement).closest<HTMLElement>(
            "[data-cell]"
          );
          if (!cellEl) return;
          event.preventDefault();
          try {
            event.currentTarget.setPointerCapture(event.pointerId);
          } catch {
            /* synthetic or already-released pointer */
          }
          start({
            row: Number(cellEl.dataset.row),
            col: Number(cellEl.dataset.col),
          });
        }}
        onPointerMove={(event) => {
          if (!anchorRef.current) return;
          event.preventDefault();
          extend(event.clientX, event.clientY);
        }}
        onPointerUp={() => commit()}
        onPointerCancel={() => commit()}>
        <div className="ws-grid">
          {puzzle.grid.map((row, rowIndex) =>
            row.map((letter, colIndex) => {
              const id = `${rowIndex}-${colIndex}`;
              return (
                <div
                  key={id}
                  data-cell=""
                  data-row={rowIndex}
                  data-col={colIndex}
                  data-found={foundCells.has(id) || undefined}
                  data-active={pathCells.has(id) || undefined}
                  className="ws-cell"
                  aria-hidden="true">
                  {letter}
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="ws-words">
        {WORDS.map((word, index) => (
          <div
            key={word}
            className="ws-chip"
            data-found={found[word] ? "true" : undefined}>
            <span>{word}</span>
            <span className="ws-num">{toArabicDigits(index + 1)}</span>
          </div>
        ))}
      </div>

      {solved ? <div className="ws-win">أحسنت! وجدت كل الكلمات الاثنتي عشرة.</div> : null}

      <div className="ws-bar">
        <span>
          وجدت {toArabicDigits(foundCount)} من {toArabicDigits(WORDS.length)}
          {wrong > 0 ? ` — محاولات خاطئة: ${toArabicDigits(wrong)}` : ""}
        </span>
        <span style={{ display: "flex", gap: ".5rem" }}>
          <button
            type="button"
            className="ws-btn"
            onClick={() => {
              setFound({});
              setWrong(0);
            }}>
            امسح
          </button>
          <button
            type="button"
            className="ws-btn"
            onClick={() => {
              setWrong(0);
              setSeedIndex((n) => n + 1);
            }}>
            لعبة جديدة
          </button>
        </span>
      </div>

      <hr className="ws-rule" />
      <div className="ws-foot">
        <span>١٢ كلمة</span>
        <span>
          {toArabicDigits(GRID_SIZE)} × {toArabicDigits(GRID_SIZE)}
        </span>
      </div>
    </div>
  );
}
