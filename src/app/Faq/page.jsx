"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import User from "../../assets/user.png"
import { useRef, useState, useEffect } from "react";


export default function page() {
    const [openIndex , setOpenIndex] = useState(null);
    const [heights , setHeights] = useState([]);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const faqData = [
                        { question: "1. Cara Pendaftaran", 
                            answer: "Hubungi kontak kami melalui email: booking@storysumba.com atau watshapp di nomor 0812-8776-3530"},
                        { question: "2. Syarat Pendaftaran", 
                            answer: "Pendaftaran Trip minimal 8 orang dan maksimal 12 orang setiap trip"},
                        { question: "3. Include", 
                            answer: "Suttlebus dari dan ke bandaar, Hotel, Lunch & Dinner, Softdrink, Luxurius Transport, Tiket Destinasi, Tour Guide dll"},
                        { question: "4. Exclude", answer: "Tiket Pesawat, Travel Insurance dan Keperluan Pribadi Lainnya"},
                    ];
    
    useEffect(() => {
        const newHeights = contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0));
        setHeights(newHeights);
    }, []);

  return (
    <>
    {/* Page Title */}
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
                <h2 className="text-6xl font-normal z-10 relative text-white text-center w-full unbounded-font">Package</h2>
                <ul className="text-white z-10 flex items-center gap-8 section-list">
                    <li className="text-sm relative">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-sm relative">
                        <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5"/>
                        <Link href="/Faq">Package</Link>
                    </li>
                </ul>
      </div>

    {/* Testimonial */}
      <div className="Testimonials bg-[#0e0700] px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]" id="Testimonials">
                      <div className="pb-10 testimonials-content  flex justify-between lg:flex-row gap-3 lg:gap-0 items-start w-full">
                          <h2 className="xl:w-[50%] w-full text-white text-4xl leading-tight unbounded-font">Pilihan Paket Tour Terbaik Untuk Anda</h2>
                          <div className="xl:w-[50%] w-full">
                              <p className="text-[#ffffff91] pb-5 text-sm">
                                  Kami sangat menghargai waktu anda dan kami siap menawarkan banyak pilihan Paket Tour Terbaik yang bisa anda sesuaikan dengan kebutuhan perjalanan anda.
                              </p>
                              <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300 mt-5">
                                  <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                                  Learn More
                                  </a>
                              </button>
                          </div>
                      </div>
      
           
                      <Swiper
                          spaceBetween={20}
                          slidesPerView={3}
                          breakpoints={{
                              1199: {slidesPerView: 2},
                              767: {slidesPerView: 2},
                              220: {slidesPerView: 1},
                          }}
                          loop={true}
                          className="cursor-pointer"
                      >
                          <SwiperSlide>
                              <div className="tst-item bg-[#191919] h-[350px] flex flex-col justify-start rounded-xl py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
                                  <div className="tst-user -flex items-start mb-3">
                                      <Image 
                                          src={User}
                                          width={30}
                                          height={30}
                                          alt="User"
                                          className="rounded-full"/>
                                  </div>
                                  <div>
                                      <h4 className="unbounded-font text-white font-semibold mb-4">Paket 3 Days 2 Night</h4>
                                  </div>
                                  <p className="text-[#ffffff91]">
                                      Pantai Watumbela,
                                      Bukit Warinding,
                                      Bukit Hiliwuku,
                                      Air Terjun Waimarang,
                                      Pantai Weilakiri,
                                      Kampung Raja Prailiu
                                  </p>
                              </div>
                          </SwiperSlide>
      
                          <SwiperSlide>
                              <div className="tst-item bg-[#191919] h-[350px] flex flex-col justify-center rounded-xl py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
                                  <div className="tst-user -flex items-start mb-3">
                                      <Image 
                                          src={User}
                                          width={30}
                                          height={30}
                                          alt="User"
                                          className="rounded-full"/>
                                  </div>
                                  <div>
                                      <h4 className="unbounded-font text-white font-semibold mb-4">Paket 4 Days 3 Night</h4>
                                  </div>
                                  <p className="text-[#ffffff91]">
                                      Pantai Watumbela,
                                      Bukit Warinding,
                                      Bukit Hiliwuku,
                                      Air Terjun Waimarang,
                                      Pantai Weilakiri
                                      Air terjun Tanggedu,
                                      Savana Purakambera,
                                      Bukit Tanau,
                                      Kampung Raja Prailiu
                                  </p>
                              </div>
                          </SwiperSlide>
      
                          <SwiperSlide>
                              <div className="tst-item bg-[#191919] h-[350px] flex flex-col justify-center rounded-xl py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
                                  <div className="tst-user -flex items-start mb-3">
                                      <Image 
                                          src={User}
                                          width={30}
                                          height={30}
                                          alt="User"
                                          className="rounded-full"/>
                                  </div>
                                  <div>
                                      <h4 className="unbounded-font text-white font-semibold mb-4">Paket 5 Days 4 Night</h4>
                                  </div>
                                  <p className="text-[#ffffff91]">
                                      Pantai Mandorak,
                                      Danau Weikuri,
                                      Kampung adat Praijing,
                                      Air Terjun Lapopo,
                                      Bukit Warinding,
                                      Bukit Hiliwuku,
                                      Air Terjun Waimarang,
                                      Pantai Weilakiri,
                                      Air terjun Tanggedu,
                                      Savana Purakambera,
                                      Bukit Tanau,
                                      Kampung Raja Prailiu
                                  </p>
                              </div>
                          </SwiperSlide>
      
                          <SwiperSlide>
                              <div className="tst-item bg-[#191919] h-[350px] flex flex-col justify-center rounded-xl py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
                                  <div className="tst-user -flex items-start mb-3">
                                      <Image 
                                          src={User}
                                          width={30}
                                          height={30}
                                          alt="User"
                                          className="rounded-full"/>
                                  </div>
                                  <div>
                                      <h4 className="unbounded-font text-white font-semibold mb-4">Paket 6 Days 5 Night</h4>
                                  </div>
                                  <p className="text-[#ffffff91]">
                                      Pantai Mandorak, 
                                      Danau Weikuri, 
                                      Kampung Ratenggaro, 
                                      Air Terjun Weikucara, 
                                      Kampung adat Praijing, 
                                      Air Terjun Lapopo, 
                                      Pantai Watumbela, 
                                      Bukit Warinding, 
                                      Bukit Hiliwuku, 
                                      Air Terjun Waimarang, 
                                      Pantai Weilakiri, 
                                      Air terjun Tanggedu, 
                                      Savana Purakambera, 
                                      Bukit Tanau, 
                                      Kampung Raja Prailiu
                                  </p>
                              </div>
                          </SwiperSlide>
      
                          <SwiperSlide>
                              <div className="tst-item bg-[#191919] h-[350px] flex flex-col justify-center rounded-xl py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
                                  <div className="tst-user -flex items-start mb-3">
                                      <Image 
                                          src={User}
                                          width={30}
                                          height={30}
                                          alt="User"
                                          className="rounded-full"/>
                                  </div>
                                  <div>
                                      <h4 className="unbounded-font text-white font-semibold mb-4">Paket 7 Days 6 Night</h4>
                                  </div>
                                  <p className="text-[#ffffff91]">
                                      Pantai Mandorak, 
                                      Danau Weikuri, 
                                      Kampung Ratenggaro, 
                                      Air Terjun Weikucara, 
                                      Air Terjun Lokomboro, 
                                      Kampung Adat Praijing, 
                                      Air Terjun Lapopo, 
                                      Pantai Watumbela, 
                                      Bukit Warinding, 
                                      Bukit Hiliwuku, 
                                      Air Terjun Waimarang, 
                                      Pantai Weilakiri, 
                                      Air Terjun Tanggedu, 
                                      Savana Purakambera, 
                                      Bukit Tanau, 
                                      Watu Parunu, 
                                      Kampung Pau, 
                                      Kampung Raja Prailiu 
                                  </p>
                              </div>
                          </SwiperSlide>
                      </Swiper>
                  </div>

    {/* Experience */}
        <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
            <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl unbounded-font pb-2">General Question</h1>
                    <p className="text-[#7a7a7a]">Yang perlu diketahui tentang paket tour ini</p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-10 mx-0 w-full lg:mx-auto lg:w-[80%]">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full cursor-pointer text-left justify-between items-center py-4 font-semibold text-gray-600"
                                >
                                    <span>{item.question}</span>
                                    <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="ml-2"/>
                                </button>

                                <div
                                    style={{maxHeight: isOpen ? `${heights[index]}px` : 0}}
                                    className="transition-all duration-500 ease-in-out overflow-hidden"
                                >
                                    <div ref={(el) => (contentRefs.current[index] = el)}>
                                        <p className="text-gray-600 px-2 pb-4">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    </>
  )
}
