import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main
                role='main'
                className='w-full min-h-full flex-grow overflow-auto'
            >
                {/* {children} */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
