import React from "react";

const Checkbox = () => {
  return (
    <>
      <input
        type="checkbox"
        className="mr-3 h-6 w-6 appearance-none rounded-full border border-[hsl(234,39%,85%)] bg-center bg-no-repeat checked:border-none checked:bg-gradient-with-check hover:cursor-pointer dark:border-[hsl(233,14%,35%)] md:h-8 md:w-8"
      />
    </>
  );
};

export default Checkbox;
