import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useAuth } from '../context/AuthContext';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';

const MainLayout = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar user={user} />
      <ScrollToTop />
      <main className='main'>
        <Outlet />
      </main>
      <Footer user={user} />
    </>
  );
};

export default MainLayout;
