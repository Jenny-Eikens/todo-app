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

  return (
    <>
      <label
        key={id}
        className="flex items-center px-4"
        ref={setNodeRef}
        style={style}
        {...attributes}
      >
        <Checkbox completed={completed} onChange={onToggle} />
        <span
          className={`${completed && "text-[hsl(233,11%,84%)] line-through dark:text-[hsl(234,11%,52%)]"} h-full w-[80%] py-4 text-sm md:w-[95%] md:text-base`}
          {...listeners}
          tabIndex={0}
        >
          {content}
        </span>
        <button className="ml-auto scale-75 p-2" onClick={onDelete}>
          {iconCross}
        </button>
      </label>
      <hr className="m-0 h-[0.075rem] border-none bg-[hsl(233,11%,84%)] dark:bg-[hsl(233,14%,35%)]" />
    </>
  );
};

export default Todo;
