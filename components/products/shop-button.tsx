'use client'

import { Button } from "@nextui-org/react";
import { ShoppingCart, TicketX } from "lucide-react";
import { useState } from "react";

export default function ShopButton({ stocks }: { stocks: number }) {

    const handleBuy = () => {
        if (stocks > 0) {
            alert('Compra realizada');
        } else {
            alert('No hay stock disponible');
        }
    }
    return (
        <div className="flex flex-col items-center">
            {stocks > 0 ? (
                <Button className="w-full text-center justify-center" color="primary" endContent={<ShoppingCart />} onClick={handleBuy}>
                    Comprar
                </Button>
            ) : (
                <Button className="w-full text-center justify-center" color="danger" variant="bordered" endContent={<TicketX />} disabled>
                    No disponible
                </Button>
            )}
        </div>
    )
}