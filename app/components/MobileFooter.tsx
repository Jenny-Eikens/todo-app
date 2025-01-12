import React from "react";
import Filter from "./Filter";

interface MobileFooterProps {
  onShowAll: () => void;
  onShowActive: () => void;
  onShowCompleted: () => void;
}

const MobileFooter = ({
  onShowAll,
  onShowActive,
  onShowCompleted,
}: MobileFooterProps) => {
  return (
    <div className="flex justify-center rounded-lg bg-white py-3 text-sm font-[700] text-[hsl(236,9%,61%)] shadow-md dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,11%,52%)] md:hidden">
      <div className="space-x-8">
        <Filter
          onShowAll={onShowAll}
          onShowActive={onShowActive}
          onShowCompleted={onShowCompleted}
        />
      </div>
    </div>
  );
};

export default MobileFooter;
