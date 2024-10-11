import { Oswald } from 'next/font/google'
import "./globals.css";
import './college.css';

const inter = Oswald({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
