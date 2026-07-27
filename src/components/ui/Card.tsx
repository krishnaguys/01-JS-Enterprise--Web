import React from "react";
import { cn } from "@/lib/helpers";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-slate-900",
        hoverable && "transition-shadow hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};