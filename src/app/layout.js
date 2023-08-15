import './globals.css';
import localFont from '@next/font/local';

const burtons = localFont({ src: '../../public/Burtons.otf' });

export const metadata = {
  title: 'Matias Sosa',
  description: 'Matias Sosa Portafolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={burtons.className}>{children}</body>
    </html>
  );
}
