"use client";

import About1 from "../../../public/Images/about-1.jpg"
import About02 from "../../../public/Images/about-02.png"
import About03 from "../../../public/Images/about-03.webp"
import icons01 from "../../../public/Images/icons-01.png"
import icons02 from "../../../public/Images/icons-02.png"
import icons03 from "../../../public/Images/icons-03.png"


import TourCompany01 from "../../../public/Images/Tour-Company-01.jpg";
import TourCompany02 from "../../../public/Images/Tour-Company-02.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed, faMoneyBill1Wave, faShieldHalved, faAngleRight, faAngleDown, faAngleUp, faPlay } from "@fortawesome/free-solid-svg-icons";

import Adventure01 from "../../../public/Images/adventure-01.jpg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";





export default function page() {
    const [openIndex, setOpenIndex] = useState(null);

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
        {/* Page Title */}
        <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
                <h2 className="text-6xl font-normal z-10 relative text-white text-center w-full unbounded-font">About</h2>
                <ul className="text-white z-10 flex items-center gap-8 section-list">
                    <li className="text-sm relative">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-sm relative">
                        <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5"/>
                        <Link href="/About">About</Link>
                    </li>
                </ul>
        </div>

        {/* About */}
        <div className="about py-[50px] lg:py-[90px] px-[2%] sm:px-[8%] lg:px-[12%]">
                        <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0">
                            <div className="lg:w-[50%]">
                                <div className="about-section flex flex-col">
                                    <div className="about-heading lg:px-[12%]">
                                        <div className="text-2xl xl:text-4xl font-bold mb-4">Bagaimana Kami Menjadi yang Terbaik</div>
                                        <p className="mb-3 w-[90%] text-[#7a7a7a] text-sm">Kami berkomitmen penuh terhadap pelayanan, kenyamanan dan kepuasan wisatawan yang ingin menikmati keindahan pulau sumba, Kami menyediakan semua kebutuhan yang diperlukan selama trip dan Dengan fasilitas armada Hiace terbaru 2025 dan fasilitas pendukung lainnya kami menjamin perjalanan anda aman, nyaman dan berkesan.</p>
                                    </div>
                                    <div className="about-image mt-8 hidden lg:flex">
                                        <Image src={About1} alt="About-1" className="rounded-r-2xl w-[45%] h-[600px] object-cover absolute left-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[50%]">
                                <div className="bg-black text-white p-6 rounded-2xl flex md:flex-col justify-between md:gap-2">
                                    <div className="flex -space-x-3">
                                        <Image src={icons01} alt="icons01" className="w-12 h-12 rounded-full border-2 border-black"/>
                                        <Image src={icons02} alt="icons02" className="w-12 h-12 rounded-full border-2 border-black"/>
                                        <Image src={icons03} alt="icons03" className="w-12 h-12 rounded-full border-2 border-black"/>
                                    </div>
                                    <div className="customers">
                                        <p className="text-[#7a7a7a]">Fasilitas terbaik yang membuat perjalanan Anda bersama kami luar biasa </p>
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

        {/* Tour Company */}
        <div className="tour-company px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] flex flex-col justify-center">
            <div tour-contents>
                <h1 className="text-3xl lg:text-5xl text-center font-semibold mb-5">Siap Memulai Petualangan Anda?</h1>
                <p className="text-[#7a7a7a] text-center text-[15px]">
                Kami memberikan pengalaman perjalanan terbaik dengan layanan prioritas dengan harga yang terbaik, layanan cepat
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-15">
                <div className="flex gap-6  p-5 border border-[#ececec] rounded-2xl">
                    <div className="tour-icons">
                        <i className="ri-map-2-line text-white text-2xl"></i>
                    </div>
                    <div className="tour-text">
                        <h2 className="font-semibold text-2xl">10+</h2>
                        <span className="text-[#7a7a7a]">Travel Destination</span>
                    </div>
                </div>
                <div className="flex gap-6 p-5 border border-[#ececec] rounded-2xl">
                    <div className="tour-icons">
                        <i className="ri-car-line text-white text-2xl"></i>
                    </div>
                    <div className="tour-text">
                        <h2 className="font-semibold text-2xl">10+</h2>
                        <span className="text-[#7a7a7a]">Travel Partner</span>
                    </div>
                </div>
                <div className="flex gap-6 p-5 border border-[#ececec] rounded-2xl">
                    <div className="tour-icons">
                        <i className="ri-home-2-line text-white text-2xl"></i>
                    </div>
                    <div className="tour-text">
                        <h2 className="font-semibold text-2xl">10+</h2>
                        <span className="text-[#7a7a7a]">Hotel & Accomodation</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mt-10">
                <div className="w-full lg:w-2/3">
                    <Image src={TourCompany01} alt="tour-company01" className="rounded-2xl"/>
                </div>
                <div className="w-full lg:w-1/3">
                    <Image src={TourCompany02} alt="tour-company02" className="rounded-2xl h-full object-cover"/>
                </div>
            </div>
        </div>

        {/* Experience FAQ*/}
        <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]">
                <div className="experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 items-start w-full">
                    <h2 className="xl:w-[50%] w-full text-white text-2xl md:text-5xl leading-tight unbounded-font">Jelajahi Surga Tersembunyi Bersama Kami</h2>
                    <div className="xl:w-[40%] w-full">
                        <p className="text-[#ffffff91] pb-5 text-sm">
                            Nikmati Tur & Pengalaman Berkualitas Terbaik Kami
                        </p>
                        <button className="btn bg-white group text-[#193555] hover:bg-[#193555] font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300 mt-5">
                            <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                            Learn More
                            </a>
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
                <div className="banner mx-0 w-full lg:mx-auto lg:w-[80%]">
                    <FontAwesomeIcon icon={faPlay} className="play-btn"/>
                </div>
        </div> 

        {/* Adventure */}
        <div className="adventure flex flex-col lg:flex-row px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] gap-10">
            <div className="w-full lg:w-[45%] adventure-content">
                <h1 className="text-4xl mb-2 font-semibold">Experience The New Adventure</h1>
                <p className="text-[#7a7a7a] mb-6 text-sm">Pengalaman tak terlupakan menjelajahi pulau cantik bersama kami</p>
                <div className="adventure-section flex gap-5 mb-4">
                    <div className="adventure-icons">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-white bg-[#0e0700] p-3 rounded-full text-20px"/>
                    </div>
                    <div className="adventure-text">
                        <h2 className="mb-1 font-semibold text-xl">Safe Traveling</h2>
                        <p className="text-[#7a7a7a]">Kami memberikan jaminan perlindungan perjalanan anda dengan pengalaman yang sudah kami lakukan selama ini</p>
                    </div>
                </div>
                <div className="adventure-section flex gap-5 mb-4">
                    <div className="adventure-icons">
                        <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-white bg-[#0e0700] p-3 rounded-full text-20px"/>
                    </div>
                    <div className="adventure-text">
                        <h2 className="mb-1 font-semibold text-xl">Affordable Price</h2>
                        <p className="text-[#7a7a7a]">Kami menawarkan pengalaman perjalanan terbaik dengan layanan prioritas dengan harga yang terbaik.</p>
                    </div>
                </div>
                <div className="adventure-section flex gap-5 mb-4">
                    <div className="adventure-icons">
                        <FontAwesomeIcon icon={faDoorClosed} className="text-white bg-[#0e0700] p-3 rounded-full text-20px"/>
                    </div>
                    <div className="adventure-text">
                        <h2 className="mb-1 font-semibold text-xl">Comfort Accomodation</h2>
                        <p className="text-[#7a7a7a]">Dengan armada terbaru yang kami miliki, perjalanan anda akan semakin sempurna!</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[55%] adventure-image h-[550px]">
                <Image src={Adventure01} alt="Adventue01" className="rounded-2xl h-full object-cover"/>
            </div>
        </div>
    </>
  )
}
