import Link from "next/link";
import "./globals.css";

export default function Homelayout({ children }) {
  return (
    <html lang="en">
      <body > 
      <header style={{ background: "red" ,fontSize: "1.25rem" }}> This is the  main header </header>
      <nav className="site-nav" style={{ background: "lightgray", fontSize: "1.25rem" }}>
       <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
       </nav>
       <div style={{background : "brown"}}>{children} </div> 
       
      <footer style={{ background: "black", color: "white",fontSize: "1.25rem" }}> This is the main footer </footer>
      </body>
    </html>
  )
}