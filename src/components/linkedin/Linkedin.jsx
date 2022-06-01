import React from "react";
import "./linkedin.css";
import { data } from "./linkedinArray";
import { GrLinkNext } from 'react-icons/gr'

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Experience = () => {
  return (
    <section id="linkedin">
      <h5>LinkedIn</h5>
      <h2>My Posts</h2>

      <Swiper className="posts__container container" modules={[Pagination, Navigation]} spaceBetween={40} slidesPerView={1} navigation pagination={{ clickable: true }}>
        {data.map((item) => (
          <SwiperSlide className="post" key={item.id}>
            <iframe src={item.embed} frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          </SwiperSlide>
        ))}

        <SwiperSlide className="btn-slide">
          <a href="https://www.linkedin.com/in/eshaan-bagga/" className="btn btn-primary postbtn" target="_blank">View More Posts <GrLinkNext /></a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Experience;
