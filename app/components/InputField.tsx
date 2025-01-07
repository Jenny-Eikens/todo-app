import React from "react";

const InputField = () => {
  return (
    <form className="flex items-stretch rounded-lg bg-white p-4 py-4 text-[hsl(235,19%,35%)] dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)]">
      <input
        type="checkbox"
        className="mr-3 h-8 w-8 appearance-none rounded-full border border-[hsl(234,39%,85%)] dark:border-[hsl(233,14%,35%)]"
        disabled
      />
      <textarea
        name="new-todo"
        id="new-todo"
        placeholder="Create a new todo..."
        className="h-8 w-full resize-none border-none bg-transparent focus:outline-none"
      ></textarea>
    </form>
  );
};

export default InputField;
