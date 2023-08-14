import { postUser } from '@/api';
import { UserContext } from '@/lib/hook/Context/createUser';
import { PopupContext } from '@/lib/hook/Context/popup';
import React, { useContext } from 'react';

interface Props {
    setConfirm: (value: boolean) => void;
}

const Confirm: React.FC<Props> = ({ setConfirm }) => {
    const { setPopup } = useContext(PopupContext);
    const { dataUser } = useContext(UserContext);
    const handleClose = () => {
        document.body.classList.remove('disable-scroll');
        setPopup(false);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setConfirm(false);
        setPopup(false);
        postUser(dataUser);
    };
    return (
        <div className="absolute w-full h-full top-0 bg-black-shadow">
            <div className="w-full max-w-6xl mx-auto relative top-28 ">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="#" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <button className="flex absolute right-0" onClick={handleClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Name: {dataUser.name}</h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Email: {dataUser.email}</h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Password: {dataUser.password}</h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Phone Number: {dataUser.phonenumber}</h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Birday: {dataUser.birday}</h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Address: {dataUser.address}</h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Role: {dataUser.role}</h2>
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Confirm;
