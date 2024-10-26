
import '@/app/ui/global.css';
import { inter, recursive } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${recursive.className} antialiased`}>{children}</body>
    </html>
  );
}
