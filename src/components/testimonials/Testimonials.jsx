import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../../App.css";

import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <div className="m-2 p-2 max-w-sm rounded-lg bg-black text-xl">
          <h1 className="text-center text-white">Patients Testimonials</h1>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="px-2 py-10 md:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="md:flex md:items-center md:justify-center md:space-x-14">
                <div className="flex relative h-48 w-48 flex-shrink-0 mx-auto md:mx-0">
                  <img
                    className="relative h-48 w-48 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>

                <div className="mt-10 md:mt-0">
                  <blockquote>
                    <p className="text-xl text-black ">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam aliquam repellat laborum minima tempore deserunt
                      explicabo placeat! Fugit, molestias nesciunt.”
                    </p>
                  </blockquote>
                  <p className="mt-7 text-lg font-semibold text-black ">
                    John Doe
                  </p>
                  <p className="mt-1 text-base text-gray-600 ">Professor</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-2 py-10 md:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="md:flex md:items-center md:justify-center md:space-x-14">
                <div className="relative h-48 w-48 flex-shrink-0 mx-auto md:mx-0">
                  <img
                    className="relative h-48 w-48 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>

                <div className="mt-10 md:mt-0">
                  <blockquote>
                    <p className="text-xl text-black ">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam aliquam repellat laborum minima tempore deserunt
                      explicabo placeat! Fugit, molestias nesciunt.”
                    </p>
                  </blockquote>
                  <p className="mt-7 text-lg font-semibold text-black ">
                    Cheang chu
                  </p>
                  <p className="mt-1 text-base text-gray-600 ">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-2 py-10 md:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="md:flex md:items-center md:justify-center md:space-x-14">
                <div className="relative h-48 w-48 flex-shrink-0 mx-auto md:mx-0">
                  <img
                    className="relative h-48 w-48 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>

                <div className="mt-10 md:mt-0">
                  <blockquote>
                    <p className="text-xl text-black ">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam aliquam repellat laborum minima tempore deserunt
                      explicabo placeat! Fugit, molestias nesciunt.”
                    </p>
                  </blockquote>
                  <p className="mt-7 text-lg font-semibold text-black ">
                    Marrie cock
                  </p>
                  <p className="mt-1 text-base text-gray-600 ">
                    Backend Developer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
