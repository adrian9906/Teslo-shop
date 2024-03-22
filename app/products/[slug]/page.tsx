import { ItemCounter } from "@/components/products/item-counter";
import { ProductSlides } from "@/components/products/product-slides";
import ShopButton from "@/components/products/shop-button";
import { SizeSelector } from "@/components/products/size-selector";
import { getImages, initialData } from "@/database/products";
import { notFound } from "next/navigation";


export default async function ProductIdPage({ params }: { params: { slug?: string } }) {

    const { slug } = params;

    const data = await getImages({ slug })

    const { products } = initialData

    if (!data) {
        notFound();
    }
    return (
        <div className="grid grid-cols-2">
            <div>
                <ProductSlides slug={slug} images={data?.images} />
            </div>
            <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-3xl  font-semibold">
                        {data.title}
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        <strong>
                        $110.00
                        </strong>
                    </div>
                    <div className="w-full flex-none text-lg font-medium  mt-4">
                        Stock: <strong>{data.inStock}</strong>
                    </div>
                    
                    <div className="w-full flex-none text-sm font-medium mt-2">
                    <span>
                    Cantidad: 
                    </span>
                    </div>
                    <div className="w-full flex-none text-sm font-medium mt-2">
                    <ItemCounter stock={data.inStock}/>
                    </div>
                    <div className="w-full flex-none text-sm font-medium mt-2">
                    <span>
                    Tallas disponibles: 
                    </span>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6">
                    <SizeSelector sizes={data.sizes}/>
                    </div>
                    <div className="w-full flex-none text-sm font-medium mt-0">
                    <span>
                    Descripcion: {" "}
                    <p className="text-justify font-medium">
                        {data.description}
                        </p> 
                    </span>
                    </div>
                    <div className="w-full mt-2 flex-none">
                        <ShopButton stocks={0}/>
                    </div>
                </div>
            </div>
            {/* <div className="justify-center items-center sm:w-1/2">
            <h1 className="justify-center items-center text-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              {data.title}
            </h1>
            <span>
               <strong>
                {data.price}$
                </strong> 
            </span>
            <span>
                Stock:<strong> {data.inStock}</strong>
            </span>
            <ItemCounter/>
            <div className="flex items-baseline mt-4 mb-6 pb-6 space-x-2">

            <SizeSelector sizes={data.sizes}/>
            </div>
            </div> */}
        </div>
    )

}