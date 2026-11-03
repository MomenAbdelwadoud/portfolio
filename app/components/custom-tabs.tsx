"use client";
import React from "react";

export interface TabItem {
  label: string;
  disabled?: boolean;
}

interface CustomTabsProps {
  tabs: TabItem[];
  value: number;
  onChange: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  value,
  onChange,
  orientation = "horizontal",
  className = "",
}) => {
  const isVertical = orientation === "vertical";

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const enabledIndexes = tabs
      .map((tab, i) => (tab.disabled ? -1 : i))
      .filter((i) => i !== -1);
    const current = enabledIndexes.indexOf(index);
    if (current === -1) return;

    const nextKey = isVertical ? "ArrowDown" : "ArrowRight";
    const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";
    let next: number | undefined;

    if (event.key === nextKey) next = enabledIndexes[(current + 1) % enabledIndexes.length];
    if (event.key === prevKey)
      next =
        enabledIndexes[
          (current - 1 + enabledIndexes.length) % enabledIndexes.length
        ];
    if (event.key === "Home") next = enabledIndexes[0];
    if (event.key === "End") next = enabledIndexes[enabledIndexes.length - 1];

    if (next !== undefined) {
      event.preventDefault();
      onChange(next);
      document.getElementById(`custom-tab-${next}`)?.focus();
    }
  };

  return (
    <div
      className={`flex ${
        isVertical
          ? "flex-col border-l border-gray-700/50"
          : "flex-row border-b border-gray-700/50 overflow-x-auto hide-scrollbar"
      } ${className}`}
      role="tablist"
      aria-orientation={orientation}
    >
      {tabs.map((tab, index) => {
        const isActive = value === index;
        return (
          <button
            key={tab.label}
            type="button"
            id={`custom-tab-${index}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`custom-tabpanel-${index}`}
            tabIndex={isActive ? 0 : -1}
            disabled={tab.disabled}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onClick={() => !tab.disabled && onChange(index)}
            className={`
              relative px-6 py-4 text-sm font-mono transition-all duration-300 whitespace-nowrap text-left
              ${
                tab.disabled
                  ? "opacity-50 cursor-not-allowed text-gray-400"
                  : "hover:bg-white/5 hover:text-white"
              }
              ${isActive ? "text-[#B5F4FF] font-semibold" : "text-gray-400"}
              ${isVertical ? "border-l-2 -ml-[1px]" : "border-b-2 -mb-[1px]"}
              ${isActive ? "border-[#B5F4FF]" : "border-transparent"}
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, className = "", ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      tabIndex={0}
      className={className}
      {...other}
    >
      {value === index && <div className="py-6 px-4">{children}</div>}
    </div>
  );
}
