import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="min-h-screen">
      <body className="align-center flex h-auto min-h-screen justify-center bg-[hsl(0,0%,98%)] bg-light-mobile bg-contain bg-no-repeat dark:bg-[hsl(235,21%,11%)] dark:bg-dark-mobile md:bg-light-desktop md:py-6 md:dark:bg-dark-desktop">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
