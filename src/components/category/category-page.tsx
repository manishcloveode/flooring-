"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import mockData from "@/data/mockData"; // Adjust path as needed
import Link from "next/link";

export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const { slug } = params;

    // Convert slug back to category name
    const getCategoryFromSlug = (slug: string) => {
        return mockData.products.find(product =>
            product.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === slug
        )?.category;
    };

    const categoryName = typeof slug === "string" ? getCategoryFromSlug(slug) : undefined;

    // Filter products by category
    const categoryProducts = mockData.products.filter(
        product => product.category === categoryName
    );

    if (!categoryName || categoryProducts.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">{categoryName}</h1>
                            <p className="text-gray-600 mt-1">{categoryProducts.length} products found</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {categoryProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/shop/${product.id}`}
                            className="group relative bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        // onMouseEnter={() => setHoveredProduct(product.id)}
                        // onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 font-medium text-sm">
                                    {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}