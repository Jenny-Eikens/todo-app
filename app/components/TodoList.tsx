"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Todo from "./Todo";
import InputField from "./InputField";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import { TodoProps } from "./Todo";

const TodoList = ({ initialTodos }: { initialTodos: TodoProps[] }) => {
  const [count, setCount] = useState(0);

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const getStoredTodos = (): TodoProps[] | null => {
    if (!typeof window !== undefined) {
      const storedTodos = localStorage.getItem("Todos");
      return storedTodos ? JSON.parse(storedTodos) : null;
    }
    return null;
  };

  const [todos, setTodos] = useState(() => {
    const storedTodos = getStoredTodos();
    return storedTodos ? storedTodos : initialTodos;
  });

  useEffect(() => {
    const todoList = JSON.stringify(todos);
    localStorage.setItem("Todos", todoList);
  }, [todos]);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const openTodos = todos.filter((todo) => !todo.completed);
    setCount(openTodos.length);
  }, [todos]);

  const handleShowAll = () => {
    setFilter("all");
  };

  const handleShowActive = () => {
    setFilter("active");
  };

  const handleShowCompleted = () => {
    setFilter("completed");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <Header />
      <div className="mt-6 space-y-4 md:mt-10">
        <InputField />
        <div className="space-y-2 rounded-lg bg-white py-2 text-[hsl(235,19%,35%)] shadow-md dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)]">
          {filteredTodos.map((todo) => (
            <Todo
              id={todo.id}
              key={todo.id}
              content={todo.content}
              completed={todo.completed}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
          <Footer
            count={count}
            onShowAll={handleShowAll}
            onShowActive={handleShowActive}
            onShowCompleted={handleShowCompleted}
          />
        </div>
        <MobileFooter
          onShowAll={handleShowAll}
          onShowActive={handleShowActive}
          onShowCompleted={handleShowCompleted}
        />
      </div>

      <div className="my-[3rem] flex justify-center text-sm font-[500] text-[hsl(236,9%,61%)] dark:text-[hsl(234,11%,52%)]">
        Drag and drop to reorder list
      </div>
    </>
  );
};

export default TodoList;
