"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/helpers";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-gray-200 dark:border-gray-800"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="flex w-full items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {item.title}
            </span>
            <ChevronDown
              size={20}
              className={cn(
                "transition-transform",
                openId === item.id && "rotate-180"
              )}
            />
          </button>
          {openId === item.id && (
            <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};