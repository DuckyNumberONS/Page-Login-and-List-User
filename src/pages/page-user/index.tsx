import { getUser } from '@/api';
import { User } from '@/lib/domain/user';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoginContext } from '@/components/Context/layout';

const PageUser = () => {
    const [dataUser, setDataUser] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { login } = useContext(LoginContext);
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
    }, []);
    return (
        <section className="py-60">
            {login && (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl mx-auto py-7 ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phonenumber
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Birday
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading ? (
                                dataUser.map((items) => (
                                    <tr key={items.idUser} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {items.name}
                                        </th>
                                        <td className="px-6 py-4">{items.email}</td>
                                        <td className="px-6 py-4">{items.phonenumber}</td>
                                        <td className="px-6 py-4">{items.birday}</td>
                                        <td className="px-6 py-4">{items.address}</td>
                                        <td className="px-6 py-4">{items.role}</td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="py-7 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Loading....
                                    </th>
                                    <td className="px-6 py-4"> Loading....</td>
                                    <td className="px-6 py-4"> Loading....</td>
                                    <td className="px-6 py-4"> Loading....</td>
                                    <td className="px-6 py-4"> Loading....</td>
                                    <td className="px-6 py-4"> Loading....</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};
export default PageUser;
