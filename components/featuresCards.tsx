'usa client'

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image"
import { Divider } from "@nextui-org/react";
import { ShirtIcon, ShoppingCartIcon, TicketIcon } from "lucide-react";


export function FeaturesCard() {
  return (

    <section id='features'>
      <div className='container space-y-8 py-12 text-center lg:py-20'>
        <h2 className='text-3xl font-bold bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent lg:text-4xl'>Opciones</h2>
        <div className='flex gap-4 md:grid-cols-4'>
          <Card shadow="sm" isPressable className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <ShirtIcon />
              <div className="grid grid-col">
                <p className="text-md">Productos</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Todos los productos disponibles de la tienda.</p>
            </CardBody>
            <Divider />
          </Card>

          <Card shadow="sm" isPressable className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <ShoppingCartIcon />
              <div className="flex flex-col">
                <p className="text-md">Compras</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Ahora puede realizar las compras de todos los productos disponibles en la tienda.</p>
            </CardBody>
            <Divider />
          </Card>


          <Card shadow="sm" isPressable className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <TicketIcon />
              <div className="flex flex-col">
                <p className="text-md">Historial de ordenes</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Puede revisar el historial de tus ordenes.</p>
            </CardBody>
            <Divider />
          </Card>
        </div>
      </div>
    </section>

  )
}