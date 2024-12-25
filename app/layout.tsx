import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBackground from '@/components/shared/PageBackground';
import ChatWidget from '@/components/chat/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Breakthrough Coaching AI',
  description: 'AI-powered sales coaching and strategy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageBackground />
          <div className="relative z-10">
            <Navigation />
            {children}
            <Footer />
          </div>
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}