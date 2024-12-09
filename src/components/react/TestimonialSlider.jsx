import { markdownify } from "@/lib/utils/textConverter";
import { useRef, useState } from "react";
import { Star } from "react-feather";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className="reviews-carousel relative">
      <Swiper
        grid={{
          rows: "auto", // Deja que las filas se ajusten automáticamente
        }}
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        centeredSlides={true}
        spaceBetween={20} 
        // loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={"feature-" + i} className="swiper-slide-active:scale-150" >
            <div className="review">
              <div className="review-author-avatar bg-gradient">
                <img src={item.avatar} alt="" />
              </div>
              <h4 className="mb-2">{item.author}</h4>
              <p className="mb-4 text-[#666]">{item.organization}</p>
              <p dangerouslySetInnerHTML={{__html: markdownify(item.content)}}/>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center">
        <div
          width="100%"
          
          className="swiper-pagination reviews-carousel-pagination !bottom-0 bg-red"
          style={{ width: "150%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
