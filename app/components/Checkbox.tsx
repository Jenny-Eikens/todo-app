import React from "react";

interface CheckboxProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  completed: boolean;
}

const Checkbox = ({ id, onChange, completed }: CheckboxProps) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        aria-label="Toggle complete"
        className={`${completed && "checked-checkbox border-none bg-gradient-with-check bg-center bg-no-repeat"} todo-checkbox mr-3 h-6 w-6 appearance-none rounded-full border border-[hsl(236,33%,92%)] bg-center bg-no-repeat hover:cursor-pointer dark:border-[hsl(233,14%,35%)] md:h-7 md:w-7`}
      />
    </>
  );
};

export default Checkbox;
