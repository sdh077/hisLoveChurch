'use client'

import clsx from 'clsx';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SwiperImage1 from '@/images/swiper/main_image_1.jpeg';
import SwiperImage2 from '@/images/swiper/main_image_2.jpeg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './../styles/swiper_style.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper mt-10"
      >
        <SwiperSlide><Image src={SwiperImage1} alt='' fill={false}></Image></SwiperSlide>
        <SwiperSlide><Image src={SwiperImage2} alt=''></Image></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
