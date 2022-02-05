import Head from 'next/head';
import Image from 'next/image';

// UI components
import Header from '../components/common/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main>
        <h1 className="text-xl">Legible Dashboard</h1>
      </main>
    </div>
  );
}
