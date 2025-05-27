'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'


const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

    const Products = [
        { title: "WallPaper", href: "#" },
        { title: "Digital Print", href: "#" },
        { title: "Custom Print", href: "#" },
        { title: "Flooring", href: "#" },
        { title: "Fabric", href: "#" },
        { title: "Architechual Film", href: "#" },
    ]

    const Aboutus = [
        { title: "Be Our Dealer", href: "#" },
        { title: "Career Opportunity", href: "#" },
        { title: "Terms & Conditions", href: "#" },
        { title: "Return & Refund Policy", href: "#" },
        { title: "Blogs", href: "#" },
        { title: "Why Use Wallpaper", href: "#" },
    ]

    const DigitalPrint = [
        { title: "Mr & Mrs Murals", href: "#" },
        { title: "Islamic Murals", href: "#" },
        { title: "Dreamland", href: "#" },
        { title: "Chinorise", href: "#" },
        { title: "Tropicals", href: "#" },
    ]

    const Download = [
        { title: "Korean Collection", href: "#" },
        { title: "European Collection", href: "#" },
        { title: "Fabric Backed Collection", href: "#" },
        { title: "Digital print", href: "#" },
        { title: "Luxury WallCovering Collection", href: "#" },
        { title: "Fabric & Upholstery Collection", href: "#" },
        { title: "Vinyl Flooring Collections", href: "#" },
        { title: "Carpet Collections", href: "#" },
    ]

    const NavLink = ({ title, href }: { title: string, href: string }) => (
        <Link href={href} className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200">
            {title}
        </Link>
    )

    return (
        <>
            {/* Custom CSS for smooth animations */}
            <style jsx>{`
                .dropdown-menu {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-10px);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .dropdown-menu.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                
                .dropdown-arrow {
                    transition: transform 0.2s ease-in-out;
                }
                
                .dropdown-arrow.rotated {
                    transform: rotate(180deg);
                }
                
                .nav-item:hover .dropdown-arrow {
                    transform: rotate(180deg);
                }
                
                .mobile-menu {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .mobile-menu.open {
                    max-height: 100vh;
                    opacity: 1;
                }
                
                .mobile-menu.closed {
                    max-height: 0;
                    opacity: 0;
                }
            `}</style>

            <header className="w-full">
                {/* Top Bar */}
                <div className="bg-white border-b border-gray-200 px-4 py-3">
                    <div className="container mx-auto flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/logo.jpg"
                                alt="Furns Logo"
                                width={40}
                                height={40}
                                className="rounded-md"
                            />
                        </Link>
                        <div className="md:hidden">
                            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </div>

                        {/* Desktop Icons */}
                        <div className="hidden md:flex items-center space-x-4 ">
                            <Button variant="ghost" className=" h-12 w-12 text-gray-600  hover:text-gray-900">
                                <Search className="h-12 w-12" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                                <User className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 relative">
                                <ShoppingCart className="h-5 w-5" />
                                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center p-0">
                                    0
                                </Badge>
                            </Button>
                        </div>
                    </div>
                </div>

                <nav className="bg-gray-200 text-black relative hidden md:block">
                    <div className="container mx-auto">
                        <ul className="flex items-center justify-center space-x-8 py-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Us", dropdown: Aboutus, key: "about" },
                                { label: "Products", dropdown: Products, key: "products" },
                                { label: "Digital Print", dropdown: DigitalPrint, key: "digital-print" },
                                { label: "Free PDF Download", dropdown: Download, key: "download" },
                                { label: "Contact", href: "/contact" },
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="relative nav-item"
                                    onMouseEnter={() => item.key && setActiveDropdown(item.key)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="flex items-center cursor-pointer text-black hover:text-orange-400 transition-colors duration-200 px-3 py-2">
                                        {item.href ? (
                                            <Link href={item.href} className="transition-colors duration-200">{item.label}</Link>
                                        ) : (
                                            <>
                                                <span className="transition-colors duration-200">{item.label}</span>
                                                <ChevronDown className={`ml-1 h-4 w-4 dropdown-arrow ${activeDropdown === item.key ? 'rotated' : ''}`} />
                                            </>
                                        )}
                                    </div>
                                    {item.dropdown && activeDropdown === item.key && (
                                        <div className="dropdown-menu active absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-md border z-50">
                                            <div className="p-4 grid gap-2">
                                                {item.dropdown.map((link, idx) => (
                                                    <NavLink key={idx} {...link} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className={`md:hidden bg-white shadow-md mobile-menu overflow-hidden ${mobileMenuOpen ? 'open' : 'closed'
                    } ${mobileMenuOpen ? 'p-4' : 'p-0'}`}>
                    <div className="flex flex-col space-y-4">
                        <NavLink title="Home" href="/" />
                        <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">About Us</p>
                            {Aboutus.map((link, idx) => <NavLink key={idx} {...link} />)}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Products</p>
                            {Products.map((link, idx) => <NavLink key={idx} {...link} />)}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Digital Print</p>
                            {DigitalPrint.map((link, idx) => <NavLink key={idx} {...link} />)}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Free PDF Download</p>
                            {Download.map((link, idx) => <NavLink key={idx} {...link} />)}
                        </div>
                        <NavLink title="Contact" href="/contact" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar