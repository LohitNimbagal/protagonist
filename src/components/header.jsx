'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [menuHeight, setMenuHeight] = useState(0)
    const menuRef = useRef(null)

    const menuItems = [
        { name: 'About', href: '#about' },
        { name: 'Templates', href: '#templates' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ]

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true)
            const timer = setTimeout(() => setIsAnimating(false), 300)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    useEffect(() => {
        if (menuRef.current) {
            setMenuHeight(menuRef.current.scrollHeight)
        }
    }, [isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">

                <Image
                    src={'/small-logo.svg'}
                    width={80}
                    height={80}
                    className="h-12 w-12 md:h-14 md:w-14 rounded-md"
                    alt='protag logo'
                />

                {/* Desktop menu - hidden on mobile, visible on large screens */}
                <nav className="hidden lg:flex space-x-4">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>

            {/* Mobile menu - expands from top */}
            <div
                ref={menuRef}
                className={`lg:hidden fixed left-0 right-0 top-0 bg-background transition-all duration-300 ease-in-out overflow-hidden border-b border-border`}
                style={{ height: isOpen ? `${menuHeight}px` : '0px' }}
            >
                {/* Close button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() => setIsOpen(false)}
                >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                </Button>

                <nav className={`flex flex-col space-y-4 p-4 pt-16 ${isAnimating ? 'animate-slide-down' : ''}`}>
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}