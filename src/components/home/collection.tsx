"use client";
import React from "react";
import { useRouter } from "next/navigation";
import mockData from "@/data/mockData"; // Adjust path as needed

export default function FloorCategories() {
    const router = useRouter();

    // Extract unique categories from mock data
    const getUniqueCategories = () => {
        const categoryMap = new Map();

        mockData.products.forEach(product => {
            if (!categoryMap.has(product.category)) {
                categoryMap.set(product.category, {
                    name: product.category,
                    image: product.image,
                    slug: product.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
                });
            }
        });

        return Array.from(categoryMap.values());
    };

    const categories = getUniqueCategories();

    const handleCategoryClick = (slug: string) => {
        router.push(`/category/${slug}`);
    };

    return (
        <div id="flooring" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="flex justify-center">
                            <div
                                className="group flex flex-col items-center cursor-pointer space-y-2"
                                onClick={() => handleCategoryClick(category.slug)}
                            >
                                {/* Circle Border with Image inside */}
                                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
                                    <div className="
                                        absolute inset-0 rounded-full 
                                        border-8 border-black 
                                        group-hover:border-green-700 
                                        group-hover:border-dotted 
                                        group-hover:animate-spin 
                                        transition-all duration-300 
                                        bg-white">
                                    </div>
                                    <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover"
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