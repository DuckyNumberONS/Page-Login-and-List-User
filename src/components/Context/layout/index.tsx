import { LoginContextType } from '@/lib/domain/login';
import React, { ReactNode, createContext, useState } from 'react';

interface LayoutProps {
    children?: ReactNode;
}

export const LoginContext = createContext<LoginContextType>({
    login: false,
    setLogin: () => {},
});

const Layout = ({ children }: LayoutProps) => {
    const [login, setLogin] = useState(false);
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <LoginContext.Provider value={{ login, setLogin }}>{children}</LoginContext.Provider>
        </div>
    );
};
export default Layout;
