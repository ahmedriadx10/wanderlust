import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const poppins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight:['400','500','600','700','800','900']
});


export const metadata = {
  title: "Wanderlust",
  description: "Explore the world with Wanderlust - your ultimate travel companion. Discover new destinations, plan unforgettable trips, and share your adventures with a vibrant community of fellow travelers. Start your journey today and let Wanderlust be your guide to the wonders of the world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}  h-full antialiased`}
    >
  
      <body>
        
    <Navbar/>

        {children}</body>
    </html>
  );
}
