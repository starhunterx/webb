import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "InfX",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <div className="background-text">
            Welcome to <span className="highlight">InfX®</span>
            <div className="typing-animation">Where Learning is a Symphony of Smiles</div>
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
