import { Navigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

const userData: { username: string; password: string }[] = [
    { username: 'user_dot', password: 'P@ssw0rd' },
    { username: 'dot_user', password: 'P@ssw0rd' },
    { username: 'user_dummy', password: 'P@ssw0rd' },
];

const showFormattedDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export interface Props {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const isLoggedIn = localStorage.getItem('user');

    if (!isLoggedIn) {
        return <Navigate to='/login' replace />;
    }

    return children;
};

export { showFormattedDate, userData, ProtectedRoute };
