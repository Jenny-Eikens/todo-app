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
        className={`${selectedFilter === "all" && "text-[hsl(220,80%,60%)]"} ${selectedFilter !== "all" && "filtering"}`}
        aria-label="Filter by all"
      >
        All
      </button>
      <button
        onClick={() => {
          setSelectedFilter("active");
          onShowActive();
        }}
        className={`${selectedFilter === "active" && "text-[hsl(220,57%,50%)]"} ${selectedFilter !== "active" && "filtering"}`}
        aria-label="Filter by active"
      >
        Active
      </button>
      <button
        onClick={() => {
          setSelectedFilter("completed");
          onShowCompleted();
        }}
        className={`${selectedFilter === "completed" && "text-[hsl(220,57%,50%)]"} ${selectedFilter !== "completed" && "filtering"}`}
        aria-label="Filter by completed     "
      >
        Completed
      </button>
    </>
  );
};

export default Filter;
