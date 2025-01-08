import React from "react";

const Footer = () => {
  return (
    <div className="mx-3 flex justify-between p-2 text-sm font-[500] text-[hsl(236,9%,61%)] dark:text-[hsl(234,11%,52%)]">
      <span>5 items left</span>
      <div className="hidden space-x-2 md:inline">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </div>
  );
};

export default Footer;
