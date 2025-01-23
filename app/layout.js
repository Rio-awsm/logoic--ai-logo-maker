import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";

const host_grotesk = Host_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "LogoIC | AI Logo maker",
  description: "LogoIC is an AI logo maker that helps you create a logo for your brand in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={host_grotesk.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}