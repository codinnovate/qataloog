"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useCallback } from "react";

const tabsItems = [
  { id: 0, title: "Termly" },
  { id: 1, title: "Bi-Annually" },
  { id: 2, title: "Annually" },
];

export default function SlidingTab() {
  const tabRef = useRef<HTMLDivElement | null>(null);
  const [tabWidth, setTabWidth] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  const updateWidth = useCallback(() => {
    if (tabRef.current) {
      const parentWidth = tabRef.current.getBoundingClientRect().width - 10;
      const numberOfTabs = tabsItems.length;
      const newTabWidth = parentWidth / numberOfTabs;

      // Only update if the width has changed to avoid unnecessary re-renders
      if (newTabWidth !== tabWidth) {
        setTabWidth(newTabWidth);
      }
    }
  }, [tabWidth]);

  useEffect(() => {
    // Store the current ref value to avoid potential issues in the cleanup
    const currentTabRef = tabRef.current;

    const resizeObserver = new ResizeObserver(updateWidth);

    if (currentTabRef) {
      resizeObserver.observe(currentTabRef);
    }

    // Cleanup function - unobserve the tabRef
    return () => {
      if (currentTabRef) {
        resizeObserver.unobserve(currentTabRef);
      }
    };
  }, [updateWidth]);

  return (
    <div
      ref={tabRef}
      className="w-[70%] min-h-8 relative border-[#D0D0D4] border-[0.25px] p-1 flex gap-1 rounded-[8px] justify-between items-center"
    >
      {tabsItems.map((tab) => (
        <button
          key={tab.id}
          style={{ width: tabWidth }}
          className={cn(
            "text-base z-20 text-grey-100 font-semibold",
            currentTab === tab.id && "text-secondary-600"
          )}
          onClick={() => setCurrentTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
      <div
        className="absolute top-1 bottom-1 left-1 right-1 transition-all inset-0 duration-300 delay-300 rounded-[4px] bg-[#FCD9D1]"
        style={{
          width: tabWidth,
          transform: `translateX(${currentTab * tabWidth}px)`,
        }}
      />
    </div>
  );
}
