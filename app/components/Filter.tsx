import React from "react";

interface FilterProps {
  onShowAll: () => void;
  onShowActive: () => void;
  onShowCompleted: () => void;
}

const Filter = ({ onShowAll, onShowActive, onShowCompleted }: FilterProps) => {
  return (
    <>
      <button onClick={onShowAll}>All</button>
      <button onClick={onShowActive}>Active</button>
      <button onClick={onShowCompleted}>Completed</button>
    </>
  );
};

export default Filter;
