'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const slides = [
    {
        title: 'Carpet Tiles',
        subtitle: 'New Products',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        image: '/carpet-tiles.jpg',
    },
    {
        title: 'Comfortable Sofa',
        subtitle: 'Trending Now',
        description:
            'Discover unmatched comfort and timeless elegance in our latest sofa collection for modern homes.',
        image: '/VINYL3.jpg',
    },
];

export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () =>
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    return (
        <div className="relative w-full h-[800px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={clsx(
                        'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    )}
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50" />

                        {/* Content */}
                        <div className="relative z-20 text-center text-white px-4 max-w-[700px] mx-auto top-1/2 -translate-y-1/2">
                            <p className="text-xl font-semibold">{slide.subtitle}</p>
                            <h1 className="text-5xl font-bold my-4">{slide.title}</h1>
                            <p className="mb-6 text-xl">{slide.description}</p>
                            <button className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Left/Right Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white text-black p-3 rounded-full shadow hover:scale-105 transition"
            >
                <ArrowLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white text-black p-3 rounded-full shadow hover:scale-105 transition"
            >
                <ArrowRight />
            </button>
        </div>
    );
}
