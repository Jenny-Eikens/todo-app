import React from "react";
import Header from "./Header";
import Todo from "./Todo";
import InputField from "./InputField";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";

type Todos = Array<Todo>;

const TodoList = ({ todos }: { todos: Todos }) => {
  return (
    <>
      <Header />
      <div className="mt-6 space-y-4 md:mt-10">
        <InputField />
        <div className="space-y-2 rounded-lg bg-white py-2 text-[hsl(235,19%,35%)] shadow-md dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)]">
          {todos.map((todo) => (
            <Todo
              id={todo.id}
              key={todo.id}
              content={todo.content}
              completed={todo.completed}
            />
          ))}
          <Footer />
        </div>
        <MobileFooter />
      </div>

      <div className="my-[3rem] flex justify-center text-sm font-[500] text-[hsl(236,9%,61%)] dark:text-[hsl(234,11%,52%)]">
        Drag and drop to reorder list
      </div>
    </>
  );
};

export default TodoList;
