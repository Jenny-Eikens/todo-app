import React from "react";

interface CheckboxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  completed: boolean;
}

const Checkbox = ({ onChange, completed }: CheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={onChange}
        className={`${completed && "border-none bg-gradient-with-check"} mr-3 h-6 w-6 appearance-none rounded-full border border-[hsl(234,39%,85%)] bg-center bg-no-repeat hover:cursor-pointer dark:border-[hsl(233,14%,35%)] md:h-8 md:w-8`}
      />
    </>
  );
};

export default Checkbox;
