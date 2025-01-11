import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import TodoList from "./components/TodoList";

/* TODO
- how can I use Checkbox in InputField and disable it only there?
- figure out how to make checkmark bigger
- why does checkbox get squashed when todo is too wide?
- fix styles
- figure out how to restrict hover effect to checkbox
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
      initialTodos: data.todos,
    };
  } catch (error) {
    console.error("Failed to fetch data: ", error);
    return {
      initialTodos: [],
    };
  }
}

const Home = async () => {
  const { initialTodos } = await fetchTodos();
  if (!initialTodos) {
    console.error("Missing required data: ", { initialTodos });
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
      <main className="m-auto min-h-full w-[90vw] max-w-[600px] py-8">
        <TodoList initialTodos={initialTodos} />
      </main>
    </>
  );
};

export default Home;
