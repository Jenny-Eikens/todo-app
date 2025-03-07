"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Todo from "./Todo";
import InputField from "./InputField";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import { TodoProps } from "./Todo";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const TodoList = ({ initialTodos }: { initialTodos: TodoProps[] }) => {
  const [count, setCount] = useState(0);

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const [isClient, setIsClient] = useState(false);

  /* used to check if localStorage is available, runs on mount */
  useEffect(() => {
    setIsClient(true);
  }, []);

  const getStoredTodos = (): TodoProps[] | null => {
    if (isClient) {
      const storedTodos = localStorage.getItem("Todos");
      return storedTodos ? JSON.parse(storedTodos) : null;
    }
    return null;
  };

  const [todos, setTodos] = useState(() => {
    return initialTodos;
  });

  /* once mounted, todos are updated using data stored in localStorage */
  useEffect(() => {
    if (isClient) {
      const storedTodos = getStoredTodos();
      if (storedTodos) {
        setTodos(storedTodos);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  /* localStorage updates everytime todos change,
  counter variable updates everytime checkbox is toggled */
  useEffect(() => {
    if (isClient) {
      const todoList = JSON.stringify(todos);
      localStorage.setItem("Todos", todoList);
    }

    const openTodos = todos.filter((todo) => !todo.completed);
    setCount(openTodos.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const generateId = () => {
    return Math.random() + Date.now();
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

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

  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const mouseSensor = useSensor(MouseSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(touchSensor, mouseSensor, keyboardSensor);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (active.id !== over?.id) {
      setTodos((items) => {
        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <Header />
      <div className="mt-6 space-y-4 md:mt-10">
        <InputField onAddTodo={handleAddTodo} />
        <div
          className="space-y-2 rounded-lg bg-white py-2 text-[hsl(235,19%,35%)] shadow-md dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)]"
          role="list"
        >
          <DndContext
            sensors={sensors}
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
