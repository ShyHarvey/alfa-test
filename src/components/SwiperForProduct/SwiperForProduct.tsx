import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from './swiper.module.scss'

import './styles.scss'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo1.jpg'

import { useSwiper } from 'swiper/react';




import { FreeMode, Navigation } from "swiper";

function SwiperForProduct() {

  const swiper = useSwiper()

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        spaceBetween={10}
        modules={[FreeMode, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} />
        </SwiperSlide>
      </Swiper>

      <Swiper
        modules={[FreeMode, Navigation]}
        direction={"vertical"}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        className="mySwiper3"
      >
        <SwiperSlide>
          <img src={photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperForProduct