import React from "react";
import Checkbox from "./Checkbox";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface TodoProps {
  id: number;
  content: string;
  completed: boolean;
}

interface TodoComponentProps extends TodoProps {
  onToggle: () => void;
  onDelete: () => void;
}

const iconCross = (
  <Image
    src="/images/icon-cross.svg"
    alt="Delete todo"
    width={20}
    height={20}
  />
);

const Todo = ({
  id,
  content,
  completed,
  onToggle,
  onDelete,
}: TodoComponentProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const checkboxId = `toggle-complete-${id}`;

  return (
    <>
      <div
        key={id}
        className="group flex items-center px-4 hover:cursor-pointer"
        ref={setNodeRef}
        style={style}
        {...attributes}
        role="listitem"
      >
        <Checkbox id={checkboxId} completed={completed} onChange={onToggle} />
        <label
          htmlFor="toggle-complete"
          className={`${completed && "text-[hsl(233,11%,84%)] line-through dark:text-[hsl(234,11%,52%)]"} h-full w-[80%] py-4 text-sm hover:cursor-pointer md:w-[90%] md:text-base`}
          {...listeners}
          tabIndex={0}
        >
          {content}
        </label>
        <button
          className="ml-auto scale-75 p-2 transition-opacity md:opacity-0 md:group-hover:opacity-100"
          onClick={onDelete}
          aria-label={`Delete ${content}`}
        >
          {iconCross}
        </button>
      </div>
      <hr className="border border-[hsl(236,33%,92%)] dark:border-[hsl(237,14%,26%)]" />
    </>
  );
};

export default Todo;
