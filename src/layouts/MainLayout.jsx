import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useAuth } from '../context/AuthContext';

const MainLayout = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar user={user} />
      <main className='main'>
        <Outlet />
      </main>
      <Footer user={user} />
    </>
  );
};

export default MainLayout;
