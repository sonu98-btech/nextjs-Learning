import Link from "next/link";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (

  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
    </nav>

    {children}
  </body>
  </html>
  )
}