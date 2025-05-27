"use client";
import React, { useState } from "react";
// import {
//     Heart,
//     Maximize2,
//     RotateCcw,
//     ShoppingCart,
// } from "lucide-react";
import Link from "next/link";
import mockData from "@/data/mockData";

type Product = {
    id: number;
    name: string;
    price: number;
    originalPrice: number | null;
    discount: number | null;
    image: string;
    category: string;
    isAlreadyAdded: boolean;
};

type ProductsSectionProps = {
    limit?: number;
    showAll?: boolean;
};

export default function ProductsSection({
    limit,
    showAll = false,
}: ProductsSectionProps) {
    const [products] = useState<Product[]>(mockData.products);
    const [, setHoveredProduct] = useState<number | null>(null);

    const displayedProducts = showAll
        ? products
        : products.slice(0, limit || 8);

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {displayedProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/shop/${product.id}`}
                            className="group relative bg-gray-100 rounded-lg overflow-hidden"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* Product Image */}
                            <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Discount Badge */}
                                {/* {product.discount && (
                                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm font-medium rounded">
                                        -{product.discount}%
                                    </div>
                                )} */}

                                {/* Wishlist Button */}
                                {/* <button
                                    type="button"
                                    onClick={(e) => e.preventDefault()}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <Heart className="w-5 h-5 text-gray-600" />
                                </button> */}

                                {/* Hover Actions */}
                                {/* {hoveredProduct === product.id && (
                                    <div className="absolute right-4 top-16 flex flex-col space-y-2">
                                        <button
                                            type="button"
                                            onClick={(e) => e.preventDefault()}
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            <Maximize2 className="w-5 h-5 text-gray-600" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={(e) => e.preventDefault()}
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            <RotateCcw className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </div>
                                )} */}

                                {/* Add to Cart Button */}
                                {/* {hoveredProduct === product.id && (
                                    <button
                                        type="button"
                                        onClick={(e) => e.preventDefault()}
                                        className="absolute bottom-4 left-4 right-4 bg-white text-gray-800 py-2 px-4 rounded font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>Add to Cart</span>
                                    </button>
                                )} */}
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                                    {product.name}
                                </h3>
                                <div className="flex items-center space-x-2">
                                    {product.originalPrice && product.originalPrice !== product.price && (
                                        <span className="text-gray-400 line-through text-sm">
                                            ${product.originalPrice.toFixed(1)}
                                        </span>
                                    )}
                                    <span className="text-gray-900 font-semibold">
                                        ${product.price.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Explore All Products Button */}
                {!showAll && (
                    <div className="text-center mt-8">
                        <Link href="/shop">
                            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                                Explore All Products
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
