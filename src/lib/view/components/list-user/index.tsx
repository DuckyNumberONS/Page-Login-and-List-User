import { getUser } from '@/api';
import { User } from '@/lib/domain/user';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoginContext } from '@/lib/hook/Context/login';
import Table from '@/lib/view/components/table';
import CreateUser from '@/lib/hook/Context/createUser';
import FormCreateUser from '../form-create-user';
import { PopupContext } from '@/lib/hook/Context/popup';

const ListUser = () => {
    const [dataUser, setDataUser] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { login } = useContext(LoginContext);
    const { popup, setPopup } = useContext(PopupContext);
    const router = useRouter();

    useEffect(() => {
        if (!login) {
            router.push('/login');
        }
    }, [login, router]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUser();
            setDataUser(result);
            setIsLoading(false);
        };
        fetchData();
    }, [popup]);

    const hadnlePopUp = () => {
        document.body.classList.add('disable-scroll');
        setPopup(true);
    };

    return (
        <>
            <section>
                {login && (
                    <div className="relative h-full shadow-md sm:rounded-lg max-w-6xl mx-auto py-7 text-white">
                        <div className="w-full flex justify-between">
                            <div className="bg-blue-600 px-4 font-bold rounded-sm py-2">{dataUser.length} Member</div>
                            <button className="bg-blue-600 px-4 font-bold rounded-sm py-2 hover:bg-blue-400" onClick={hadnlePopUp}>
                                Add Member
                            </button>
                        </div>
                        <table className="w-full text-sm text-left my-20">
                            <thead className="text-xs uppercase bg-gray-700">
                                <tr className="grid grid-cols-12 text-center pr-5">
                                    <th className="py-4 w-full col-span-2">Name</th>
                                    <th className="py-4 w-full col-span-3">Email</th>
                                    <th className="py-4 w-full col-span-2">Phonenumber</th>
                                    <th className="py-4 w-full col-span-1">Birday</th>
                                    <th className="py-4 w-full col-span-3">Address</th>
                                    <th className="py-4 w-full col-span-1">Role</th>
                                </tr>
                            </thead>
                            <tbody className=" bg-gray-800 flex flex-col items-center justify-between overflow-y-scroll w-full h-[800px]">
                                {!isLoading ? (
                                    dataUser.map((items) => (
                                        <>
                                            <Table
                                                key={items.idUser}
                                                name={items.name}
                                                email={items.email}
                                                phonenumber={items.phonenumber}
                                                birday={items.birday}
                                                address={items.address}
                                                role={items.role}
                                            />
                                        </>
                                    ))
                                ) : (
                                    <Table />
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
            <CreateUser>
                <FormCreateUser />
            </CreateUser>
        </>
    );
};
export default ListUser;
