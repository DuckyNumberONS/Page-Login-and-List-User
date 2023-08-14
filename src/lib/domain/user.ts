export interface User {
    address: string;
    birday: string;
    email: string;
    idUser: string;
    name: string;
    password: string;
    phonenumber: string;
    role: string;
}
export type UserContextType = {
    dataUser: User;
    setDataUser: React.Dispatch<React.SetStateAction<User>>;
};
