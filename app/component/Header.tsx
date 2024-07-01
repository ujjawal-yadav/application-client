'use client'
import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import useAuth from '../utils/api';
import img from "../../public/logo.png";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
};

const Header: FC<Props> = (props: Props) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [name, setName] = useState('');
    const { loggedInUser, error, login, fetchLoggedInUser } = useAuth(); // Assuming isTokenValid is a method from useAuth

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const toggleContactModal = () => {
        setIsContactModalOpen(!isContactModalOpen);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await login(name);
        if (success) {
            toggleLoginModal(); // Close the modal after successful login
        }
    };

    useEffect(() => {
        fetchLoggedInUser();
    }, []);

    const renderLoginModalContent = () => {
        if (loggedInUser) {
            return (
                <div>
                    <p>Hey, {loggedInUser} how are you, hope you have a good day.</p>
                    <div className="mb-4 mt-4">
                        <p className="mt-4">Not {loggedInUser}?</p>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2"></label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Hey, can I get your name please?</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
            );
        }
    };

    return (
        <div className='w-full'>
            <div className="fixed top-0 left-0 w-full h-[80px] z-[80] transition duration-500 bg-white">
                <div className='w-[93.8%] m-auto h-full'>
                    <div className="w-full h-full flex items-center justify-between">
                        <div className="flex flex-row justify-between items-center">
                            <div className='pr-1'>
                                <p className='font-medium text-xl'>My Application for Internship @</p>
                            </div>
                            <div className='w-[200px] h-[45px]'>
                                <Image
                                    src={img}
                                    width={200}
                                    height={45}
                                    alt="Logo"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='mr-4 pr-5 text-base'>
                                <p onClick={toggleLoginModal} style={{ cursor: 'pointer' }}>
                                    Hello {loggedInUser ? `, ${loggedInUser}` : ''}
                                </p>
                            </div>
                            <div className='relative'>
                                <button
                                    onClick={toggleContactModal}
                                    className="bg-[#35198E] hover:bg-[#5D47A5] text-white font-bold py-2 px-6 rounded-full"
                                >
                                    <p className='text-base font-semibold'>Contact Me</p>
                                </button>

                                {isLoginModalOpen && (
                                    <div className="absolute right-0 mt-2 w-[380px] bg-[#F7F4FE] p-4 m-3 rounded-lg shadow-lg transition-all duration-300 ease-out slide-down">
                                        <button
                                            onClick={toggleLoginModal}
                                            className="absolute top-0 right-2 text-xl text-gray-500 hover:text-gray-700"
                                        >
                                            &times;
                                        </button>
                                        <form onSubmit={handleLogin}>
                                            {renderLoginModalContent()}
                                            {error && <p className="text-red-500 text-xs italic py-2"></p>}
                                            <button type="submit" className="bg-[#35198E] hover:bg-[#5D47A5] text-white font-bold py-2 px-4 rounded-full">
                                                 Submit
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {isContactModalOpen && (
                                    <div className="absolute right-0 mt-2 w-[380px] bg-[#F7F4FE] p-4 m-3 rounded-lg shadow-lg transition-all duration-300 ease-out slide-down">
                                        <button
                                            onClick={toggleContactModal}
                                            className="absolute top-0 right-2 text-xl text-gray-500 hover:text-gray-700"
                                        >
                                            &times;
                                        </button>
                                        <div className="flex items-center mb-5 mt-2 text-sm justify-evenly">
                                            <p className=" -ml-1 mt-1 ">Contact me through LinkedIn</p>
                                            <a href='https://www.linkedin.com/in/ujjawal-yadav-1425531b4/' target="_blank" rel="noopener noreferrer"
                                                className="bg-[#0A66C2] hover:bg-[#004182] text-white font-bold py-1 px-5  ml-3 rounded-full"
                                            >
                                                LinkedIn
                                            </a>
                                        </div>
                                        <div className="flex items-center mb-3 justify-evenly text-sm">
                                            <p className=" text-sm">Keep it old school and use mail</p>
                                            <a href='mailto:63ujjawal.yadav@gmail.com ' target="_blank" rel="noopener noreferrer"
                                                className="bg-[#D44638] hover:bg-[#A3362A] text-white font-bold py-1 px-[35px]  rounded-full"
                                            >
                                                Mail
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .slide-down {
                    transform: translateY(-30px);
                    opacity: 0;
                    animation: slideDown 0.3s forwards;
                }
                
                @keyframes slideDown {
                    0% {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;
