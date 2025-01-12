import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import TodoList from "./components/TodoList";

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
      <div>
        <main className="m-auto min-h-[90vh] w-[90vw] max-w-[600px] py-8">
          <TodoList initialTodos={initialTodos} />
        </main>
        <footer className="bottom-1 mt-6 p-2 text-center text-sm md:bottom-0 md:p-0">
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://github.com/Jenny-Eikens" target="_blank">
              Jennifer Eikens
            </a>
            .
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
