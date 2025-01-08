import React from "react";
import Checkbox from "./Checkbox";
import Image from "next/image";

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

const iconCross = (
  <Image
    src="/images/icon-cross.svg"
    alt="Delete todo"
    width={20}
    height={20}
  />
);

const Todo = ({ id, content, completed }: Todo) => {
  return (
    <>
      <label key={id} className="flex items-center p-4">
        <Checkbox />
        <span
          className={`${completed && "text-[hsl(233,11%,84%)] line-through dark:text-[hsl(234,11%,52%)]"} text-sm md:text-base`}
        >
          {content}
        </span>
        <button className="ml-auto scale-75 p-2">{iconCross}</button>
      </label>
      <hr className="m-0 h-[0.075rem] border-none bg-[hsl(233,11%,84%)] dark:bg-[hsl(233,14%,35%)]" />
    </>
  );
};

export default Todo;
