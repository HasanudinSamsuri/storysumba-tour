"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAngleDown, faAngleUp  } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import toursData from '../ToursData.json';
import { useEffect, useRef, useState } from "react";

import About1 from "../../../public/Images/about-1.jpg"
import About02 from "../../../public/Images/about-02.png"
import About03 from "../../../public/Images/about-03.webp"
import icons01 from "../../../public/Images/icons-01.png"
import icons02 from "../../../public/Images/icons-02.png"
import icons03 from "../../../public/Images/icons-03.png"


import BlogPage01 from "../../assets/Blog-Page-01.png"
import BlogPage02 from "../../assets/Blog-Page-02.png"
import BlogPage03 from "../../assets/Blog-Page-03.png"

import User from "../../assets/user.png"

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';



export default function Index() {
    const [selectedTour , setSelectedTour] = useState(null);

    const [openIndex , setOpenIndex] = useState(null);

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

    return (
        <>
            {/* Hero */}
            <div className="hero h-screen min-h-screen flex justify-center items-center z-10" id="hero">
                <div className="hero-content relative text-center">
                    <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
                        Find Your Best <br /> Travels Packages
                    </h1>
                    <p className="pt-3 text-[#ffffffb3] md:pb-10 pb-5">
                        Berencana jalan-jalan? Kami akan atur perjalanan Anda dengan tempat terbaik dan anggaran terbaik!
                    </p>
                    <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300 mt-5">
                            <a href="/Faq" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                                     Lihat Semua Paket
                            </a>
                        </button>
                </div>
            </div>

            {/* Tours */}
            <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-20 lg:py-[120px] flex flex-col gap-10 lg:gap-14" id="Tours">
                <div className="travel-content text-center">
                    <h1 className="unbounded-font text-4xl font-semibold pb-3">Pilihan Perjalanan Terbaik di Pulau Sumba</h1>
                    <p className="w-[60%] mx-auto text-[#193555]">Jelajahi destinasi yang menakjubkan, ciptakan kenangan tak terlupakan dan mulailah pengalaman seumur hidup.</p>
                </div>
                <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {toursData.map((tour) => (
                        <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
                            <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
                                <Image 
                                    src={tour.Images}
                                    width={400}
                                    height={300}
                                    alt={tour.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 text-white bg-linear-to-t from-black/70 to-transparent">
                                    <div>
                                        <h2 className="text-xl font-semibold unbounded-font pb-1">
                                            {tour.title}
                                        </h2>
                                        <p className="text-[#ffffff91] text-xs flex items-center gap-1">
                                            <FontAwesomeIcon icon={faLocationDot}/>
                                            {tour.location}
                                        </p>
                                    </div>
                                    <h4 className="text-xl font-semibold unbounded-font text-right">
                                        <span className="text-[#ffffff91] text-xs font-normal">
                                            
                                        </span> {" "}
                                        <br />
                                        {tour.price}
                                    </h4>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* About */}
            <div className="about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]" id="About">
                <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0">
                    <div className="lg:w-[50%]">
                        <div className="about-section flex flex-col">
                            <div className="about-heading lg:px-[12%]">
                                <div className="text-2xl xl:text-4xl font-bold mb-4">Bagaimana Kami Menjadi yang Terbaik</div>
                                <p className=" w-[90%] text-[#7a7a7a] text-sm">Kami berkomitmen penuh terhadap pelayanan, kenyamanan dan kepuasan wisatawan yang ingin menikmati keindahan pulau sumba, Kami menyediakan semua kebutuhan yang diperlukan selama trip dan Dengan fasilitas armada Hiace terbaru 2025 dan fasilitas pendukung lainnya kami menjamin perjalanan anda aman, nyaman dan berkesan.</p>
                            </div>
                            <div className="about-image mt-8 hidden lg:flex">
                                <Image src={About1} alt="About-1" className="rounded-r-2xl w-[45%] h-[600px] object-cover absolute left-0"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%]">
                        <div className="bg-black text-white p-6 rounded-2xl flex md:flex-col justify-between md:gap-2">
                            <div className=" autor-sec">
                            <div className="flex -space-x-3">
                                <Image src={icons01} alt="icons01" className="w-12 h-12 rounded-full border-2 border-black"/>
                                <Image src={icons02} alt="icons02" className="w-12 h-12 rounded-full border-2 border-black"/>
                                <Image src={icons03} alt="icons03" className="w-12 h-12 rounded-full border-2 border-black"/>
                            </div>
                            <div className="customers">
                                <p className="text-[#7a7a7a]">Kami memberikan pengalaman perjalanan terbaik dengan layanan prioritas dengan harga yang terbaik, layanan cepat </p>
                            </div>
                            </div>
                        </div>
                        <div className="about-travel">
                            <Image src={About02} alt="About02" className="rounded-2xl mt-10 object-cover"/>
                        </div>
                        <div className="about-place flex sm:flex-row flex-col items-start gap-5 mt-10">
                            <Image src={About03} alt="About03" className="rounded-2xl h-[350px] sm:w-[50%] w-full object-cover"/>
                            <div className="bg-black text-white p-6 rounded-2xl flex justify-between gap-20 sm:w-[300px] w-full">
                                <div className="customers">
                                    <h1 className="text-white text-2xlmt-2 mb-3">Join Our Sumba Travel Trip</h1>
                                    <p className="text-[#7a7a7a]">Untuk menjaga kualitas dan kenyamanan para pengunjung, kami bekerja sama secara exclusive dengan beberapa tempat wisata, hotel dan restauran terbaik yang ada di pulau sumba.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <a href="/Faq" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
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

            {/* Blog */}
            <div className="blog py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]" id="Blog">
                <div className="w-full pb-5">
                    <h1 className="unbounded-font text-4xl font-semibold pb-3">About Sumba</h1>
                    <p className="text-[#193555]">
                        Sumba adalah salah satu pulau tercantik di timur Indonesia, dengan alam yang indah, binatang pandemik, makanan khas dan kaya nilai budaya yang wajib dijelajahi.
                    </p>
                </div>
                <div className="blog-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    <div className="blog-card">
                        <Image src={BlogPage01} alt="blogpage01" className="rounded-[20px] w-[300px] h-[300px]" />
                        <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">Uma Mbatangu: Rumah Adat Sumba Timur</h2>
                        <p className="text-[#7a7a7a] text-sm">Uma Mbatangu, yang berarti rumah menara. Rumah ini memiliki ciri khas atap tinggi yang runcing menjulang ke atas, melambangkan hubungan manusia dengan leluhur dan dunia roh</p>
                    </div>
                    <div className="blog-card">
                        <Image src={BlogPage02} alt="blogpage02" className="rounded-[20px] w-[300px] h-[300px]" />
                        <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">Sandal Wood: Kuda asli sumba</h2>
                        <p className="text-[#7a7a7a] text-sm">Kuda Sumba adalah ras kuda asli dari Pulau Sumba, Nusa Tenggara Timur (NTT), yang dikenal dengan ketahanan, kecepatan, dan kekuatannya meskipun berukuran relatif kecil.</p>
                    </div>
                    <div className="blog-card">
                        <Image src={BlogPage03} alt="blogpage03" className="rounded-[20px] w-[300px] h-[300px]" />
                        <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">Lau Pahikung: Kain Tenun Ikat Sumba</h2>
                        <p className="text-[#7a7a7a] text-sm">Tenun khas sumba timur adalah salah satu warisan budaya paling terkenal dari pulau sumba, NTT. Tenun ini bukan sekedar kain, tapi juga mengandung makna sinbolik , sosial dan spiritual yang sangat kuat bagi masyarakat sumba. Berikut penjelasan lengkapnya</p>
                    </div>
                </div>
            </div>

            {/* Experience FAQ*/}
            <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]" id="Faq">
                <div className="experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 items-start w-full">
                    <h2 className="xl:w-[50%] w-full text-white text-2xl md:text-5xl leading-tight unbounded-font">Jelajahi Surga Tersembunyi Bersama Kami</h2>
                    <div className="xl:w-[40%] w-full">
                        <p className="text-[#ffffff91] pb-5 text-sm">
                           Nikmati Tur & Pengalaman Berkualitas Terbaik Kami
                        </p>
                        <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300 mt-5">
                            <Link href="/Faq" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">Learn More</Link>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-10 mx-auto w-full lg:mx-auto lg:w-[80%]">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        const contentRef = useRef(null);
                        const [height , setHeight] = useState(0);

                        useEffect(() => {
                            if(isOpen && contentRef.current) {
                                setHeight(contentRef.current.scrollHeight);
                            }
                            else{
                                setHeight(0);
                            }
                        }, [isOpen]);
                        return (
                            <div key={index} className="border-b border-gray-700">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full cursor-pointer text-left justify-between items-center py-4 font-semibold text-white"
                                >
                                    <span>{item.question}</span>
                                    <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="ml-2"/>
                                </button>
                                <div
                                    style={{maxHeight: `${height}px`}}
                                    className="transition-all duration-500 ease-in-out overflow-hidden"
                                >
                                    <div ref={contentRef}>
                                        <p className="text-gray-400 px-2 pb-4">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Contact Banner */}
            <div className="contact-banner flex justify-center items-center" id="Contact">
                <div className="contact-banner-content relative text-center">
                    <h1 className="xl:text-5xl lg:text-7xl text-4xl unbounded-font font-bold text-white">Hubungi Kami & <br /> Dapatkan Promo Special</h1>
                    <p className="pt-6 text-[#ffffffb3] pb-10 text-center">Kami memberikan promo terbaik untuk anda</p>
                    <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300 mt-5">
                        <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                            Hubungi Kami
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
};