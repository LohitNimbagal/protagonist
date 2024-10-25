import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
    Credenza,
    CredenzaContent,
    CredenzaTrigger,
} from "@/components/ui/credenza"

export function ReadMoreDialog({ template }) {
    return (
        <Credenza>
            <CredenzaTrigger asChild>
                <Button variant="outline" className='w-full font-semibold border-[#516459]'>Read More</Button>
            </CredenzaTrigger>
            <CredenzaContent className="sm:max-w-[1200px] p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative w-full aspect-video md:h-full p-10 md:col-span-2">
                        <Image
                            src={template.imageUrl}
                            alt={template.title}
                            layout="fill"
                            objectFit="object-contain"
                        />
                    </div>
                    <div className="p-6 space-y-4 flex flex-col justify-start">
                        <h3 className="text-2xl font-bold">{template.title}</h3>
                        <p className="text-xl font-semibold text-primary">{template.price}</p>
                        <p className="text-gray-600">
                            {template.description}
                        </p>
                        <Link href={template.cta} className="w-full">
                            <Button className="w-full mt-4">
                                {template.price ? 'Buy Now' : 'Free Access'}
                            </Button>
                        </Link>
                    </div>
                </div>
            </CredenzaContent>
        </Credenza >
    )
}