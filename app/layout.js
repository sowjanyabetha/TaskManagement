import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Management",
  description: "Task Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={inter.className}>
        <Header></Header>
        <div className="container mt-3">{children}</div>
      </body>
    </html>
  );
}
