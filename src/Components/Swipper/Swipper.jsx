import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ReviewData } from "../DummyData";
import { TestimonialCard } from "../../Components";
import { SwiperContainer } from "./Swipper.style";

const Swipper = () => {
  return (
    <SwiperContainer>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },

          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 4,
          },
        }}
      >
        {ReviewData.map((item) => (
          <div key={item.id}>
            <SwiperSlide className="sample">
              <TestimonialCard {...item} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default Swipper;
