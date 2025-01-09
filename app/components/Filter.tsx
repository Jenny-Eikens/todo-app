import React, { useState } from "react";

interface FilterProps {
  onShowAll: () => void;
  onShowActive: () => void;
  onShowCompleted: () => void;
}

const Filter = ({ onShowAll, onShowActive, onShowCompleted }: FilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "active" | "completed"
  >("all");

  return (
    <>
      <button
        onClick={() => {
          setSelectedFilter("all");
          onShowAll();
        }}
        className={`${selectedFilter === "all" && "text-[hsl(219,97%,71%)] dark:text-[hsl(220,57%,50%)]"}`}
      >
        All
      </button>
      <button
        onClick={() => {
          setSelectedFilter("active");
          onShowActive();
        }}
        className={`${selectedFilter === "active" && "text-[hsl(219,97%,71%)] dark:text-[hsl(220,57%,50%)]"}`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setSelectedFilter("completed");
          onShowCompleted();
        }}
        className={`${selectedFilter === "completed" && "text-[hsl(219,97%,71%)] dark:text-[hsl(220,57%,50%)]"}`}
      >
        Completed
      </button>
    </>
  );
};

export default Filter;
