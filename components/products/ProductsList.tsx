'use client'

import { IProduct } from "@/interfaces"
import { ProductCard } from "./ProductCard"



export function ProductList({ products }: { products: IProduct[] }) {
    return (
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
            {

                products?.map((product) => {
                    return <ProductCard key={product.slug} product={product} />
                })
            }
        </div>
    )

}

