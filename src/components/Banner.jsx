import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import img2 from '../assets/slider1.jpg'
import img1 from '../assets/slider2.jpg'
import img3 from '../assets/slider3.jpg'
import { Navigation } from "swiper";
const Banner = () => {
    return (
        <div>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className="lg:min-h-screen" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="lg:min-h-screen" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="lg:min-h-screen" src={img3} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;