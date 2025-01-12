"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Todo from "./Todo";
import InputField from "./InputField";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import { TodoProps } from "./Todo";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

  const generateId = () => {
    return Math.random() + Date.now();
  };

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const openTodos = todos.filter((todo) => !todo.completed);
    setCount(openTodos.length);
  }, [todos]);

  const handleClearCompleted = () => {
    const clearedTodos = todos.filter((todo) => !todo.completed);
    setTodos(clearedTodos);
  };

  const addTodo = (text: string) => {
    const addedTodo: TodoProps = {
      id: generateId(),
      content: text,
      completed: false,
    };

    setTodos([...todos, addedTodo]);
  };

  const handleAddTodo = (text: string) => {
    addTodo(text);
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    console.log("Drag event!");
    if (active.id !== over?.id) {
      setTodos((items) => {
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  localStorage.clear();

  return (
    <>
      <Header />
      <div className="mt-6 space-y-4 md:mt-10">
        <InputField onAddTodo={handleAddTodo} />
        <div className="space-y-2 rounded-lg bg-white py-2 text-[hsl(235,19%,35%)] shadow-md dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)]">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={filteredTodos}
              strategy={verticalListSortingStrategy}
            >
              {filteredTodos.map((todo) => (
                <Todo
                  id={todo.id}
                  key={todo.id}
                  content={todo.content}
                  completed={todo.completed}
                  onToggle={() => handleToggle(todo.id)}
                  onDelete={() => handleDelete(todo.id)}
                />
              ))}
            </SortableContext>
          </DndContext>
          <Footer
            count={count}
            onShowAll={() => setFilter("all")}
            onShowActive={() => setFilter("active")}
            onShowCompleted={() => setFilter("completed")}
            onClearCompleted={handleClearCompleted}
          />
        </div>
        <MobileFooter
          onShowAll={() => setFilter("all")}
          onShowActive={() => setFilter("active")}
          onShowCompleted={() => setFilter("completed")}
        />
      </div>

      <div className="flex justify-center pt-[3rem] text-sm font-[500] text-[hsl(236,9%,61%)] dark:text-[hsl(234,11%,52%)]">
        Drag and drop to reorder list
      </div>
    </>
  );
};

export default TodoList;
