import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import PropertyItem from "./propertyItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecentProperties } from "../stores/propertySlice";
import { Ellipsis } from "react-awesome-spinners";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PropertySlider() {
  const dispatch = useDispatch();
  const { loading, recentProperties } = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(getRecentProperties());
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Ellipsis color="#0369a1" />
      </div>
    );
  }

  return (
    <Swiper
      slidesPerView={0.75}
      spaceBetween={10}
      slidesPerGroup={1}
      allowTouchMove={true}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="w-11/12 px-14 py-10"
      breakpoints={{
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
          centeredSlides: false,
        },
      }}
    >
      {recentProperties.map((property, i) => (
        <SwiperSlide key={i} className="w-52">
          <PropertyItem key={i} property={property} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PropertySlider;
