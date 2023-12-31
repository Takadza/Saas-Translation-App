import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'



export const metadata: Metadata = {
  title: 'Saas Transalation App',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ClientProviders>
    <html lang="en">
      <body >
       <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
       >
       <Header/>
        {children}
       </ThemeProvider>
        </body>
    </html>
  </ClientProviders>
  )
}
