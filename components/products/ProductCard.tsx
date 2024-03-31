'usa client'

import { useMemo, useState } from "react";
import { IProduct } from '../../interfaces/products';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image"
import { Link } from "@nextui-org/react";


export function ProductCard({ product }: { product: IProduct }) {
  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[0]}`
      : `/products/${product.images[1]}`
  },
    [isHovered, product.images])

  return (
    <Card shadow="sm" isPressable onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link className="flex flex-col overflow-visible p-0" href={`/products/${product.slug}`} >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={product.title}
          src={productImage}
          className="z-0 w-full h-full object-cover"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{product.title}</b>
        <p className="text-default-500">{product.price}$</p>
      </CardFooter>
      </Link>
    </Card>
  )
}
