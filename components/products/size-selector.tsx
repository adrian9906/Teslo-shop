'use client'

import { Button } from "@nextui-org/react"
import { color } from "framer-motion"
import { useState } from "react"

export function SizeSelector({ sizes }: { sizes: string[] }) {

    const [selected, setSelected] = useState('')

    const [color, setColor] = useState<number | null>(null);

    return (
        <div className="flex space-x-2 gap-4 items-center">

            {sizes.map((size, index) => (
                <Button key={index} color={index === color ? "primary" : "default"} onClick={() => setColor(index)}>
                    {size}
                </Button>
            ))}
        </div>
    )
}
