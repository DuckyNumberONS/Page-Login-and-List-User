import { User } from '@/lib/domain/user';
import { UserContext } from '@/lib/hook/Context/createUser';
import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Confirm from '../confirm';
import { PopupContext } from '@/lib/hook/Context/popup';

const FormCreateUser: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    const { popup, setPopup } = useContext(PopupContext);

    const { setDataUser } = useContext(UserContext);
    const [confirm, setConfirm] = useState(false);
    const onSubmit: SubmitHandler<User> = (data) => {
        setDataUser(data);
        setConfirm(true);
    };

    const handleClose = () => {
        document.body.classList.remove('disable-scroll');
        setPopup(false);
    };
    return (
        <>
            {popup && (
                <>
                    {confirm ? (
                        <Confirm setConfirm={setConfirm} />
                    ) : (
                        <div className="absolute w-full h-full top-0 bg-black-shadow">
                            <div className="w-full max-w-6xl mx-auto relative top-28">
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="#" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="w-full relative">
                                        <button className="flex absolute right-0" onClick={handleClose}>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            {...register('name', {
                                                required: { value: true, message: 'Name is empty' },
                                                maxLength: { value: 20, message: 'Name cannot exceed 20 characters' },
                                            })}
                                        />
                                        {errors?.name?.type === 'required' && <p className="text-red-600 mt-3">{errors.name?.message}</p>}
                                        {errors?.name?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.name?.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Email
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="text"
                                            placeholder="Email"
                                            {...register('email', {
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address',
                                                },
                                                required: { value: true, message: 'Email is empty' },
                                                maxLength: { value: 30, message: 'Email cannot exceed 30 characters' },
                                            })}
                                        />
                                        {errors?.email?.type === 'required' && <p className="text-red-600 mt-3">{errors.email?.message}</p>}
                                        {errors?.email?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.email?.message}</p>}
                                        {errors?.email?.type === 'pattern' && <p className="text-red-600 mt-3">{errors.email?.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Password
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="text"
                                            placeholder="Password"
                                            {...register('password', {
                                                required: { value: true, message: 'Password is empty' },
                                                maxLength: { value: 20, message: 'Password cannot exceed 20 characters' },
                                            })}
                                        />
                                        {errors?.name?.type === 'required' && <p className="text-red-600 mt-3">{errors.name?.message}</p>}
                                        {errors?.name?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.name?.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                                            Phone Number
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phonenumber"
                                            type="text"
                                            placeholder="Phone Number"
                                            {...register('phonenumber', {
                                                pattern: { value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g, message: 'Phone Number +84' },
                                                required: { value: true, message: 'Phone Number is empty' },
                                                maxLength: { value: 20, message: 'Phone Number cannot exceed 20 characters' },
                                            })}
                                        />
                                        {errors?.phonenumber?.type === 'required' && <p className="text-red-600 mt-3">{errors.phonenumber?.message}</p>}
                                        {errors?.phonenumber?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.phonenumber?.message}</p>}
                                        {errors?.phonenumber?.type === 'pattern' && <p className="text-red-600 mt-3">{errors.phonenumber?.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birday">
                                            Birday
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="birday"
                                            type="text"
                                            placeholder="Birday"
                                            {...register('birday', {
                                                required: { value: true, message: 'Birday is empty' },
                                                maxLength: { value: 20, message: 'Birday cannot exceed 20 characters' },
                                            })}
                                        />
                                        {errors?.birday?.type === 'required' && <p className="text-red-600 mt-3">{errors.birday?.message}</p>}
                                        {errors?.birday?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.birday?.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                            Address
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="address"
                                            type="text"
                                            placeholder="Address"
                                            {...register('address', {
                                                required: { value: true, message: 'Address is empty' },
                                                maxLength: { value: 20, message: 'Address cannot exceed 20 characters' },
                                            })}
                                        />
                                        {errors?.address?.type === 'required' && <p className="text-red-600 mt-3">{errors.address?.message}</p>}
                                        {errors?.address?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.address?.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                                            Role
                                        </label>
                                        <select
                                            id="role"
                                            {...register('role', {
                                                required: { value: true, message: 'Role is required' },
                                            })}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option selected>Choose a role</option>
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        {errors?.role?.type === 'required' && <p className="text-red-600 mt-3">{errors.role?.message}</p>}
                                        {errors?.role?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.role?.message}</p>}
                                    </div>
                                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};
export default FormCreateUser;
