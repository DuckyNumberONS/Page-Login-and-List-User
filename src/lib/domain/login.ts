export interface PropsLogin {
    email: string;
    password: string;
}

export interface PropsDataLogin {
    dataUser: PropsLogin[];
    dataLogin: PropsLogin;
}

export type LoginContextType = {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
