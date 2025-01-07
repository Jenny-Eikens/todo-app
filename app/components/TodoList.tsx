import React from "react";
import Header from "./Header";
import Todo from "./Todo";
import InputField from "./InputField";
import Footer from "./Footer";

type Todos = Array<Todo>;

const TodoList = ({ todos }: { todos: Todos }) => {
  return (
    <>
      <Header />
      <div className="mt-8 space-y-6">
        <InputField />
        <div className="space-y-2 rounded-lg bg-white py-2 text-[hsl(235,19%,35%)] dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)]">
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
      </div>
    </>
  );
};

export default TodoList;
