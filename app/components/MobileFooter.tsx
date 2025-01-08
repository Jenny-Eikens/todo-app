import React from "react";

const MobileFooter = () => {
  return (
    <div className="flex justify-center rounded-lg bg-white py-3 text-sm font-[700] text-[hsl(236,9%,61%)] shadow-md dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,11%,52%)] md:hidden">
      <div className="space-x-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default MobileFooter;
