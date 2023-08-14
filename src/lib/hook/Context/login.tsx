import { LoginContextType } from '@/lib/domain/login';
import React, { ReactNode, createContext, useState } from 'react';

interface LonginProps {
    children?: ReactNode;
}

export const LoginContext = createContext<LoginContextType>({
    login: false,
    setLogin: () => {},
});

const Login = ({ children }: LonginProps) => {
    const [login, setLogin] = useState(false);
    return <LoginContext.Provider value={{ login, setLogin }}>{children}</LoginContext.Provider>;
};
export default Login;
