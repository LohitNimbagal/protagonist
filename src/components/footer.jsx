import { Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className=" py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-xl font-semibold">NotionTemplates</Link>
                        <p className="text-sm text-muted-foreground">© 2023 NotionTemplates. All rights reserved.</p>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                            <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}