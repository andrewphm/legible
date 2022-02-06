import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

//Redux
import { useSelector } from 'react-redux';

// UI components
import Header from '../components/common/Header';
import SideBarPopOut from '../components/common/SideBarPopOut';
import SideBar from '../components/common/SideBar';
import HomeDashboard from '../components/dashboard/HomeDashboard';
import UsersDashboard from '../components/dashboard/UsersDashboard';
import OrdersDashboard from '../components/dashboard/OrdersDashboard';
import ProductsDashboard from '../components/dashboard/ProductsDashboard';

export default function Home() {
  const [currentMenu, setCurrentMenu] = useState('home');
  const router = useRouter();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (user === null) router.push('/login');
  }, []);

  return (
    <div>
      <Head>
        <title>Legible Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen overflow-hidden relative">
        <Header />
        <SideBarPopOut />

        <section className="w-full h-full flex">
          <SideBar setCurrentMenu={setCurrentMenu} />
          <section className="w-full h-full lg:px-10">
            {currentMenu === 'home' && <HomeDashboard />}
            {currentMenu === 'users' && <UsersDashboard />}
            {currentMenu === 'orders' && <OrdersDashboard />}
            {currentMenu === 'products' && <ProductsDashboard />}
          </section>
        </section>
      </main>
    </div>
  );
}
