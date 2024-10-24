import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function Header() {

    return (

        <header className="border-b ">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                {/* <Link href="/" className="text-2xl font-bold">NotionTemplates</Link> */}
                <Link href="/" className="text-2xl font-bold">
                    <Image
                        src={'/small-logo.svg'}
                        width={80}
                        height={80}
                        className="h-12 w-12 md:h-14 md:w-14 rounded-md"
                        alt='protag logo'
                    />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><Link href="#templates" className="text-muted-background hover:text-foreground">Templates</Link></li>
                        <li><Link href="#reviews" className="text-muted-background hover:text-foreground">Reviews</Link></li>
                        <li><Link href="#contact" className="text-muted-background hover:text-foreground">Contact</Link></li>
                    </ul>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className='md:hidden'>
                            <Menu className='w-6 h-6' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            {/* <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription> */}
                        </SheetHeader>

                        <nav className="ml-auto flex flex-col space-y-5">
                            <SheetClose asChild>
                                <Link href="#services" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Services
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#offers" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Offers
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#testimonials" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Testimonials
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#faq" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                    FAQ
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="#contact" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Contact
                                </Link>
                            </SheetClose>
                        </nav>
                        {/* <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                </SheetClose>
            </SheetFooter> */}
                    </SheetContent>
                </Sheet >
            </div>
        </header>
    )
}
