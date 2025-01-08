import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-[700] tracking-[0.3em] text-white md:text-4xl">
        TODO
      </h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
