import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

interface Props {
    children: React.ReactNode;
}

// const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
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
