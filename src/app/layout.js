import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const burtons = localFont({
  src: '../../public/fonts/Burtons.otf',
  variable: '--font-burtons',
});

export const metadata = {
  title: 'Matias Sosa',
  description: 'Matias Sosa Portafolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className, burtons.variable)}>{children}</body>
    </html>
  );
}
