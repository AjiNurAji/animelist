import { Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const open = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'CuyAnimeList',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
