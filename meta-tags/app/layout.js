import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: {
    default: "Next.js Learning",
    template: "%s | Next.js Learning",
  },
  description: "Learning Next.js",
};

export default function Homelayout({ children }) {
  return (
    <html lang="en">
      <body > 
      <header style={{ background: "red" ,fontSize: "1.25rem" }}> This is the  main header </header>
      <nav className="site-nav" style={{ background: "white", fontSize: "1.25rem" }}>
       <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
       </nav>
       <div style={{background : "yellow",color: "black"}}>{children} </div> 
       
      <footer style={{ background: "black", color: "white",fontSize: "1.25rem" }}> This is the main footer </footer>
      </body>
    </html>
  )
}