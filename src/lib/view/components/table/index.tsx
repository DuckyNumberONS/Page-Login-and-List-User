import React from 'react';

interface Props {
    key?: string;
    name?: string;
    email?: string;
    phonenumber?: string;
    birday?: string;
    address?: string;
    role?: string;
    class?: string;
}

const Table = ({ key = 'Loading....', name = 'Loading....', email = 'Loading....', phonenumber = 'Loading....', birday = 'Loading....', address = 'Loading....', role = 'Loading....,' }: Props) => {
    return (
        <tr key={key} className="text-center w-full mb-4 grid grid-cols-12 border-b border-gray-700 hover:bg-gray-600">
            <td className="py-4 w-full col-span-2">{name}</td>
            <td className="py-4 w-full col-span-3">{email}</td>
            <td className="py-4 w-full col-span-2">{phonenumber}</td>
            <td className="py-4 w-full col-span-1">{birday}</td>
            <td className="py-4 w-full col-span-3">{address}</td>
            <td className="py-4 w-full col-span-1">{role}</td>
        </tr>
    );
};

export default Table;
