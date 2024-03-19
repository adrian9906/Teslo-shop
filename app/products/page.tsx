import { ProductList } from "@/components/products/ProductsList";
import { CardSkeleton, CardSkeletonList } from "@/components/ui/skeleton";
import { initialData } from "@/database/products";
import { Suspense } from "react";

export default function ProductPage() {
  return (
    <div>
      <section id='features'>
    <div className='container space-y-8 py-12 text-center lg:py-20'>
        <h2 className='text-3xl font-bold lg:text-4xl'>
        <span className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-3xl text-transparent'>
        Productos   </span>
            </h2>
    </div>
        </section>
      <Suspense fallback={<CardSkeletonList/>}>
        <ProductList products={initialData.products as any} />
      </Suspense>
    </div>
  );
}
