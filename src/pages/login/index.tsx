'use client';

import { getUser } from '@/api';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { PropsLogin } from '@/lib/domain/login';
import { User } from '@/lib/domain/user';
import { useForm } from 'react-hook-form';
import { verifyLogin } from '@/lib/hook/verifyLogin';
import { LoginContext } from '@/lib/hook/Context/login';

const Login = () => {
    const { setLogin } = useContext(LoginContext);
    const [dataUser, setdataUser] = useState<PropsLogin[]>([]);
    const [checkValue, setCheckValue] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUser();
            setdataUser(result);
        };
        fetchData();
    }, []);

    const onSubmit = (data: PropsLogin) => {
        const verify = verifyLogin({ dataUser, dataLogin: data });
        if (verify) {
            setLogin(verify);
            alert('login sucess');
            router.push('/page-user');
            setCheckValue(false);
        } else {
            setCheckValue(true);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCheckValue(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [checkValue]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    return (
        <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold  text-white">
                User Admin
            </a>
            <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">Sign in to your account</h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                Your email
                            </label>
                            <input
                                {...register('email', {
                                    required: { value: true, message: 'Email is empty' },
                                    maxLength: { value: 30, message: 'Email cannot exceed 30 characters' },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                type="email"
                                name="email"
                                id="email"
                                className="border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="name@company.com"
                            />
                            {errors?.email?.type === 'required' && <p className="text-red-600 mt-3">{errors.email?.message}</p>}
                            {errors?.email?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.email?.message}</p>}
                            {errors?.email?.type === 'pattern' && <p className="text-red-600 mt-3">{errors.email?.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">
                                Password
                            </label>
                            <input
                                {...register('password', {
                                    required: { value: true, message: 'Password is empty' },
                                    maxLength: { value: 20, message: 'Password cannot exceed 30 characters' },
                                })}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors?.password?.type === 'required' && <p className="text-red-600 mt-3">{errors.password?.message}</p>}
                            {errors?.password?.type === 'maxLength' && <p className="text-red-600 mt-3">{errors.password?.message}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border  rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className=" text-gray-300">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a href="#" className="text-gray-300 text-sm font-medium text-primary-600 hover:underline text-primary-500">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className={`w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 ${
                                checkValue ? 'border border-solid border-red-500 text-red-500' : 'text-white'
                            }`}
                        >
                            Sign in
                        </button>
                        <p className="text-sm font-light  text-gray-400">
                            Don’t have an account yet?{' '}
                            <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Login;
