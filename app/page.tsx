import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import TodoList from "./components/TodoList";

/* TODO
- figure out what's wrong with hr height
- how can I use Checkbox in InputField and disable it only there?
- figure out how to make checkmark bigger
- save state in localStorage
*/

export const metadata = {
  title: "Frontend Mentor | Todo App",
  icons: {
    icon: "/favicon-32x32px.png",
  },
  description: "Todo app built with Next",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

async function fetchTodos() {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    if (!data) {
      throw new Error("Invalid data format");
    }
    return {
      todos: data.todos,
    };
  } catch (error) {
    console.error("Failed to fetch data: ", error);
    return {
      todos: [],
    };
  }
}

const Home = async () => {
  const { todos } = await fetchTodos();
  if (!todos) {
    console.error("Missing required data: ", { todos });
    return <div>Error loading data</div>;
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <meta
          name="viewport"
          content={`width=${viewport.width} initial-scale=${viewport.initialScale}`}
        />
      </Head>
      <main className="m-auto w-[85vw] max-w-[600px]">
        <TodoList todos={todos} />
      </main>
    </>
  );
};

export default Home;
