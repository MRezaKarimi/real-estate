import { useState } from "react";
import { FreeMode, Lazy, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        className="rounded-xl h-fit lg:h-[500px] lg:bg-black"
        navigation
        lazy
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Lazy, FreeMode, Navigation, Thumbs]}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image.fullSize} className="m-auto lg:h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        className="mt-3"
        onSwiper={setThumbsSwiper}
        freeMode
        spaceBetween={10}
        slidesPerView={4}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 9,
          },
        }}
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image.thumb} className="m-auto rounded-md lg:h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageGallery;
