import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Carousel({ data, renderComponent }) {
  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 7,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;