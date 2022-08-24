import { userData } from '../helper';

export interface UserProps {
    username: string;
    password: string;
}

const login = ({ username, password }: UserProps) => {
    const userFound = userData.find(
        (user) => user.username === username && user.password === password
    );
    if (userFound) {
        localStorage.setItem('user', JSON.stringify(userFound));
        return true;
    }

    return false;
};

const logout = () => {
    localStorage.removeItem('user');
};

export const AuthService = {
    login,
    logout,
};
