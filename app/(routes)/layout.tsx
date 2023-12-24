import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

import { cn } from "@/lib/utils"

import Footer from "../_components/footer";
import Header from "../_components/header";

const items = [
  { title: "Крафт", link: "craft"},
  { title: "Перевозка", link: "transport" },
  { title: "Данж", link: "dungeon" },
]


const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'main',
  description: 'albion trade finder app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header items={items}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
