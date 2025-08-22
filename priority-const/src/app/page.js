import '@/app/globals.css';
import Homepage from '@/app/pages/home';

export default function Home({ Component, pageProps }) {
  return (
    <main className="flex min-h-screen flex-col bg-[#141312]" > 
      <Homepage />
    </main>
  );
}