import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Profile from '../pages/profile/Profile';
import Projects from '../pages/cards/Projects';
import Analytics from '../pages/analytics/Analytics';
// import Contacts from '../pages/contacts/Contacts';
import NotFound from '../pages/notfound/NotFound';
import AdminProfile from '../pages/adminprofile/AdminProfile';
import CreateProject from '../pages/createproject/CreateProject';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'profile', element: <Profile /> },
      { path: 'projects', element: <Projects /> },
      { path: 'analytics', element: <Analytics /> },
      // { path: 'contacts', element: <Contacts /> },
      { path: 'admin', element: <AdminProfile /> },
      { path: 'createproject', element: <CreateProject /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
