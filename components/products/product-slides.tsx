'use client'

import { useState } from "react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Image } from "@nextui-org/image"
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from "@nextui-org/react"

export function ProductSlides({ images, slug }: { images: string[], slug?: string }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className = "container">
                {/* TODO 
                Arreglar el diseño de las fotos*/}

            <Swiper
                loop = {true}
                spaceBetween = {10}
                navigation = {true}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-96 w-full rounded-lg"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex h-full w-full items-center justify-center">
                        <Image
                            shadow = "sm"
                            radius = "lg"
                            isZoomed
                            width = "100%"
                            height = "100%"
                            loading = "lazy"
                            alt = {slug}
                            src = {image}
                            className = "z-0 w-full h-full object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* ThumNails */}

            <Swiper
                onSwiper = {setThumbsSwiper}
                loop = {true}
                spaceBetween = {12}
                slidesPerView = {images.length}
                freeMode = {true}
                watchSlidesProgress = {true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='thumbs mt-3 h-32 w-full rounded-lg'
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                       <button className="flex h-full w-full items-center justify-center">
                       <div className="flex flex-row h-full w-full items-center justify-center">
                        <Image
                            shadow = "sm"
                            radius = "lg"
                            alt = {slug}
                            width = "100%"
                            src = {image}
                            loading = "lazy"
                            className="z-0 w-full h-full object-cover"
                            height = "100%" />
                        </div>
                        </button> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}