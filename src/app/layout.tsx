import Providers from '@/components/Providers'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import {Space_Grotesk} from 'next/font/google'
import Navbar from '@/components/NavBar'

export const metadata = {
  title: 'Convey | Home',
  description: 'Welcome!',
}

const space_grotesk = Space_Grotesk({subsets:["latin"]});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={space_grotesk.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
        <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}