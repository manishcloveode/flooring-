'use client'

import React, { useState } from 'react'
import mockData from '@/data/mockData'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const categories = ['Artificial Grass', 'Carpet', 'Carpet Tiles', 'LVT & SPC', 'VINYL', 'Vinyl Sheet']

const CategoryTabs = () => {
    const [activeCategory, setActiveCategory] = useState('Artificial Grass') // default should match a real category

    const filteredProducts = mockData.products.filter(
        (product) => product.category === activeCategory
    )

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center text-black mb-3">
                Our Products
            </h2>
            <p className="text-gray-600 text-center text-xl max-w-2xl mx-auto my-10 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            'text-lg font-semibold transition-colors duration-300',
                            activeCategory === category
                                ? 'text-orange-500 font-semibold'
                                : 'text-gray-700 hover:text-orange-500'
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all border border-gray-200  cursor-pointer"
                    >
                        <Link href={`/shop/${product.id}`}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={200}
                                className=" w-full h-64 object-cover"
                            />
                            <h3 className="mt-4 font-semibold text-2xl">{product.name}</h3>
                            <p className="text-base text-gray-600">{product.description}</p>
                            {/* <div className="mt-2 font-semibold text-lg text-orange-500">
                                ₹{product.price.toFixed(2)}
                            </div> */}
                            {/* {product.originalPrice && product.discount && (
                                <div className="text-sm text-gray-500 line-through">
                                    ₹{product.originalPrice.toFixed(2)} (-{product.discount}%)
                                </div>
                            )} */}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryTabs
