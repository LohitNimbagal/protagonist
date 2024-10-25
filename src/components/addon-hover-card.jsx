import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { ReadMoreDialog } from "./read-more"

export default function AddonHoverCard({ children, className, template }) {
    return (
        <HoverCard openDelay={40} closeDelay={40}>
            <HoverCardTrigger>
                {children}
            </HoverCardTrigger>
            <HoverCardContent className='w-96 bg-muted' side={'top'}>
                <Image
                    src={template.imageUrl}
                    alt={template}
                    width={300}
                    height={200}
                    className="rounded-md object-cover w-96 h-auto"
                />
                <p className="text-base flex items-center justify-between text-[#253d30] py-2 mt-2">
                    <span>
                        {template.title}
                    </span>
                    <span>
                        {template.price}
                    </span>
                </p>
                <ReadMoreDialog template={template} />
            </HoverCardContent>
        </HoverCard>
    )
}