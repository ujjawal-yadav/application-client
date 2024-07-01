import React, { useState } from 'react';

const Role = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="description">
            <div className='w-full bg-[#35198E] h-[400px] flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <h2 className='my-8 text-4xl text-white font-semibold text-center'>Why I want to join the ArmorCode Team</h2>
                    <button
                        onClick={toggleModal}
                        className="bg-white hover:bg-[#F7F4FE] text-black text-sm font-semibold py-[3.5%] px-[17%] rounded-full text-center"
                    >
                        Click Here
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-[#F7F4FE] w-[90%] md:w-[60%] h-auto max-h-[80%] p-6 rounded-lg shadow-lg relative overflow-y-auto transform translate-y-12">
                        <button
                            onClick={toggleModal}
                            className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700"
                        >
                            &times;
                        </button>
                        <h2 className='text-2xl font-semibold mb-4 text-center'>Why I want to join the ArmorCode Team</h2>
                        <div className="space-y-4 text-gray-800 text-center">
                            <p>
                                Joining ArmorCode is a dream opportunity for me because it aligns perfectly with my passion for cybersecurity and cutting-edge technology. ArmorCode&apos;s innovative approach to application security, integrating tools to reduce risk and automate DevSecOps workflows, is exactly the kind of challenge I thrive on.
                            </p>
                            <p>
                                My experience with technologies like React, MongoDB, Express, and Redis, gained through internships at BINARAMA and CodSoft, has prepared me well for the technical demands of ArmorCode&apos;s projects. I am particularly excited about working with AI-powered platforms to enhance security postures, a field where ArmorCode is leading the charge.
                            </p>
                            <p>
                                The company&apos;s vibrant and friendly work culture, combined with its remote/hybrid work policy, makes it an ideal environment for me. I am eager to contribute to a team that values collaboration and innovation, helping to build the safest software possible.
                            </p>
                            <p>
                                In short, ArmorCode offers the perfect blend of challenging projects, supportive community, and the opportunity to make a significant impact in cybersecurity. I am enthusiastic about bringing my skills and passion to ArmorCode and contributing to its mission of transforming the security landscape. Let&apos;s build the safest software together!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Role;
