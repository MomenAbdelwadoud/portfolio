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
            role="tab"
            aria-selected={isActive}
            aria-disabled={tab.disabled}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(index)}
            className={`
              relative px-6 py-4 text-sm font-mono transition-all duration-300 whitespace-nowrap text-left
              ${
                tab.disabled
                  ? "opacity-50 cursor-not-allowed text-gray-500"
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
      className={className}
      {...other}
    >
      {value === index && <div className="py-6 px-4">{children}</div>}
    </div>
  );
}
