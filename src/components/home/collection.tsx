"use client";
import React from "react";

export default function FloorCategories() {
    const categories = [
        {
            id: 1,
            name: "Artificial Grass",
            image: "/Artificial-Grass.png",
            alt: "Wallpaper",
        },
        {
            id: 2,
            name: "Carpet",
            image: "/carpet.jpg",
            alt: "Living room furniture",
        },
        {
            id: 3,
            name: "Carpet Tiles",
            image: "/carpet-tiles.jpg",
            alt: "Dining room furniture",
        },
        {
            id: 4,
            name: "LVT & SPC",
            image: "/LVT & SPC.jpg",
            alt: "Lounge furniture",
        },
        {
            id: 5,
            name: "VINYL",
            image: "VINYL.png",
            alt: "Office chair",
        },
        {
            id: 6,
            name: "Vinyl Sheet",
            image: "/Vinyl Sheet.jpg",
            alt: "Office chair",
        },
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
                    {categories.map((category) => (
                        <div key={category.id} className="flex justify-center">
                            <div className="group flex flex-col items-center cursor-pointer space-y-2">
                                {/* Circle Border with Image inside */}
                                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
                                    <div className="
        absolute inset-0 rounded-full 
        border-2 border-black 
        group-hover:border-green-700 
        group-hover:border-dotted 
        group-hover:animate-spin 
        transition-all duration-300 
        bg-white">
                                    </div>
                                    <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.alt}
                                            className="w-3/5 h-3/5 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Text below the circle */}
                                <span className="text-gray-800 font-medium text-xs sm:text-sm lg:text-base text-center px-1 sm:px-2 leading-tight">
                                    {category.name}
                                </span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
