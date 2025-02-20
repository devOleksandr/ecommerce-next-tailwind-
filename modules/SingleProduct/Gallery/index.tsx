"use client";

import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper/modules";
import {NavigationOptions, Swiper as SwiperClass} from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image, {StaticImageData} from "next/image";

export const Gallery = ({data}: { data: Array<StaticImageData> }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.update(); // Оновлюємо thumbsSwiper, якщо він змінився
    }
  }, [thumbsSwiper]);

  return (
    <div>
      <Swiper
        loop
        modules={[Thumbs]}
        thumbs={{swiper: thumbsSwiper}}
        className="main-slider mb-4"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} alt={`Image ${index}`}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative">
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-gray-800 px-4 py-2 rounded-full text-gold-transparent text-h5 hover:scale-150 transition-all"
        >
          ◀
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-gray-800 text-gold-transparent px-4 py-2 rounded-full text-h5 hover:scale-150 transition-all"
        >
          ▶
        </button>

        {/* Thumbs слайдер з кастомним `Navigation` */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation, Thumbs]}
          watchSlidesProgress
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === "object") {
              if (prevRef.current && nextRef.current) {
                (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }
          }}
          style={{ height: "112px", maxHeight: "112px", overflow: "hidden" }}
          className="thumbs-slider"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item} alt={`Image ${index}`} loading={'lazy'}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

