import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
    Credenza,
    CredenzaBody,
    CredenzaContent,
    CredenzaFooter,
    CredenzaHeader,
    CredenzaTrigger,
} from "@/components/ui/credenza"

export function ReadMoreDialog({ template }) {
    return (
        <Credenza>
            <CredenzaTrigger asChild>
                <Button variant="outline" className='w-full font-semibold text-gray-800'>Read More</Button>
            </CredenzaTrigger>
            <CredenzaContent className="sm:max-w-[500px] p-0 overflow-hidden">
                <CredenzaHeader>
                    <Image
                        src={template.imageUrl}
                        alt={template.title}
                        width={600}
                        height={400}
                        objectFit="object-contain"
                    />
                </CredenzaHeader>
                <CredenzaBody>
                    <div className="p-6 pt-2 space-y-4 flex flex-col justify-start">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-[#253d30]">{template.title}</h3>
                            <p className="text-xl font-semibold text-primary text-[#253d30]">{template.price}</p>
                        </div>
                        <p className="text-gray-800">
                            {template.description}
                        </p>
                        <Link href={template.cta} className="w-full">
                            <Button className="w-full mt-4">
                                {template.price ? 'Buy Now' : 'Free Access'}
                            </Button>
                        </Link>
                    </div>
                </CredenzaBody>
            </CredenzaContent>
        </Credenza >
    )
}