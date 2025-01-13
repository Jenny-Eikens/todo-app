import React from "react";
import Filter from "./Filter";

interface FooterProps {
  count: number;
  onShowAll: () => void;
  onShowActive: () => void;
  onShowCompleted: () => void;
  onClearCompleted: () => void;
}

const Footer = ({
  count,
  onShowAll,
  onShowActive,
  onShowCompleted,
  onClearCompleted,
}: FooterProps) => {
  return (
    <div className="mx-3 flex justify-between p-2 text-sm font-[700] text-[hsl(236,9%,61%)] dark:text-[hsl(234,11%,52%)]">
      <span>
        {count} {count === 1 ? "item" : "items"} left
      </span>
      <div className="hidden space-x-8 md:inline">
        <Filter
          onShowAll={onShowAll}
          onShowActive={onShowActive}
          onShowCompleted={onShowCompleted}
        />
      </div>
      <button className="filtering" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
