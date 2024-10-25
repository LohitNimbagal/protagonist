import { Mail } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <footer id='contact' className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="container mx-auto text-center space-y-2">
                <p className='flex items-center justify-center gap-3'>
                    <Mail className='w-4 h-4' />
                    protagonists.hq@gmail.com
                </p>
                <p>&copy; {new Date().getFullYear()} protagonistsyndrome. All rights reserved.</p>
            </div>
        </footer>
    )
}