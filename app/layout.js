import "@/app/_styles/globals.css";

import Sidebar from "./_components/Sidebar";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>SteamInfo</title>
      </head>
      <body
        className={`${mulish.className} font-semibold min-h-screen antialiased bg-primary-800 flex `}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
