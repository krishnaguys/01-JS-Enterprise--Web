import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={"text-lg text-gray-600 dark:text-gray-400 max-w-2xl" + (centered ? " mx-auto" : "")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};