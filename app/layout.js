import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'MarkefyHub',
  description: 'Grow your business with expert marketing solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#FFFFFF]'>
        <Navbar />
        <div className='min-h-screen min-w-screen'>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

