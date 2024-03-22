import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { FeaturesCard } from '@/components/featuresCards'
import { Spotlight } from '@/components/spotlight'

export default async function IndexPage() {
  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-28'>
        <div className='container flex max-w-full flex-col items-center gap-4 text-center'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
          <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Tienda de ropa {" "}
            <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text font-heading text-3xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl'>
              de la empresa Tesla
            </span>
          </h1>

          {/* <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            
          </p> */}
          <div className='space-x-4'>
          <Button
      href="#"
      as={Link}
      color="primary"
      variant="solid"
      className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-solid border-stone-300 bg-purple-600 bg-[length:200%_100%] px-6 font-medium text-inherit transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 hover:bg-purple-800'
    >
      Empezar
    </Button>
            
          </div>
       <FeaturesCard/>
          
        </div>
        
      </section>
      
    </>
  )
}




