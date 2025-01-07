import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light-mobile dark:bg-dark-mobile md:bg-light-desktop md:dark:bg-dark-desktop bg-[hsl(0,0%,98%)] dark:bg-[hsl(235,21%,11%)] bg-contain bg-no-repeat flex justify-center align-center">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
