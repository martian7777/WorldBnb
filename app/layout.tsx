import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Nunito } from "next/font/google";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Rentora — Find Your Perfect Stay",
  description: "Discover unique homes, cabins, villas and experiences around the world with Rentora.",
}

const font = Nunito({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
