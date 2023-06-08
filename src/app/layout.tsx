import { Poppins } from 'next/font/google'
import './globals.css'

const roboto = Poppins({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'React Hook Form - Diloes',
  description: 'Next.js + TypeScript + React Hook Form + Tailwind CSS '
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={roboto.className}>
      <body className='bg-[#0C172C]'>{children}</body>
    </html>
  )
}
