import React, { useState } from "react";

interface InputFieldProps {
  onAddTodo: (text: string) => void;
}

const InputField = ({ onAddTodo }: InputFieldProps) => {
  const [newTodo, setNewTodo] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (newTodo.trim() === "") alert("Todo can't be empty!");
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form className="flex items-center rounded-lg bg-white p-4 text-[hsl(235,19%,35%)] dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)]">
      <input
        type="checkbox"
        className="mr-3 h-6 w-6 appearance-none rounded-full border border-[hsl(234,39%,85%)] dark:border-[hsl(233,14%,35%)] md:h-8 md:w-8"
        disabled
      />
      <textarea
        name="new-todo"
        id="new-todo"
        placeholder="Create a new todo..."
        value={newTodo}
        className="h-[18px] w-full resize-none overflow-hidden border-none bg-transparent text-sm hover:cursor-pointer focus:cursor-text focus:outline-none md:text-base"
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
    </form>
  );
};

export default InputField;
