import React from 'react';
import { Heart } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}


            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* First Row - Our Motto & Our Mission */}
                <div className="grid lg:grid-cols-2 gap-16 mb-32">

                    {/* Our Motto */}
                    <div className="group relative">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Modern furniture setup"
                                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center mb-4">
                                    <Heart className="w-8 h-8 text-red-500 mr-3" />
                                    <h2 className="text-3xl font-bold text-white">Our Motto</h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                &quot;Design with passion, create with purpose.&quot; We believe that every piece of furniture should tell a story and every space should reflect the personality of those who inhabit it. Our commitment is to bring you furniture that doesn&apos;t just fill a room, but transforms it into a living masterpiece.
                            </p>
                            <div className="mt-6 flex items-center text-orange-600 hover:text-orange-700 cursor-pointer transition-colors">

                            </div>
                        </div>
                    </div>

                    {/* Our Mission */}
                    <div className="group relative">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Elegant living room"
                                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center mb-4">

                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To revolutionize the furniture industry by providing cutting-edge designs that blend functionality with aesthetic excellence. We strive to make premium furniture accessible to everyone while maintaining our commitment to quality, sustainability, and customer satisfaction.
                            </p>
                            <div className="mt-6 flex items-center text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">

                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row - Our Vision (Centered) */}
                <div className="flex justify-center">
                    <div className="max-w-4xl group relative">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 mb-8">
                            <img
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                alt="Future of furniture design"
                                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent opacity-60"></div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-10 shadow-lg border border-purple-100">
                            <p className="text-gray-800 text-xl leading-relaxed text-center mb-8">
                                To become the world&apos;s most trusted furniture destination, setting new standards in design innovation and customer experience. We envision a future where every home is a sanctuary of style and comfort, where our furniture pieces become cherished parts of families stories for generations to come.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div className="text-3xl font-bold ">50+</div>
                                    <div className="text-gray-600">Countries Served</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div className="text-3xl font-bold mb-2">1M+</div>
                                    <div className="text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                    <div className="text-3xl font-bold  mb-2">15</div>
                                    <div className="text-gray-600">Years of Excellence</div>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <button className="bg-gradient-to-r from-green-300 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
                                    Join Our Journey
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;