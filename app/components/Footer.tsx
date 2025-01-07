import React from "react";

const Footer = () => {
  return (
    <div className="mx-3 flex justify-between p-2 text-[hsl(234,11%,52%)]">
      <span>5 items left</span>
      <div className="space-x-2">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </div>
  );
};

export default Footer;
