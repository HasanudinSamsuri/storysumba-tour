import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faXTwitter, faYoutube, faTiktok  } from '@fortawesome/free-brands-svg-icons';

import Link from "next/link";
import Image from "next/image";
import {logo} from "../../assets/logo5.png";

export default function Footer() {
  return (
    <>
      <div className="footer bg-black px-[2%] sm:px-[8%] pt-[50px] lg:pt-[90px]">
        <div className="footer-content">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                    <div className="text-white logo text-2xl uppercase font-semibold">
                        <a href="#" className="unbounded-font">
                            Story<span className="unbounded-font text-red-700">Sumba</span>
                        </a>
                    </div>
                        <p className="mt-4 text-[#ffffffb3]">Badung, Bali - jl, Desa Sawangan, No. 11 Nusa Dua, 81566</p>
                      <div className="footer-icons flex gap-3 mt-5">
                            <FontAwesomeIcon icon={faInstagram} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer"/>
                            <FontAwesomeIcon icon={faXTwitter} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer"/>
                            <FontAwesomeIcon icon={faFacebook} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer"/>
                            <FontAwesomeIcon icon={faYoutube} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer"/>
                            <FontAwesomeIcon icon={faTiktok} className="text-[#ffffffb3] text-[20px] hover:text-white transition cursor-pointer"/>
                      </div>
                </div>

                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-10">

                  <div className="md:col-span-3 space-y-3">
                    <h2 className="text-white text-2xl unbounded-font mb-6 cursor-pointer">Page</h2>
                    <ul className="space-y-2 list-none">
                      <li><Link href="/About" className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">About Us</Link></li>
                      <li><Link href="/Tours" className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">Tour</Link></li>
                      <li><Link href="/Faq" className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">Packages</Link></li>
                      <li><Link href="/Contact" className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="md:col-span-3 space-y-3">
                    <h2 className="text-white text-2xl unbounded-font mb-6 cursor-pointer">Links</h2>
                    <ul className="space-y-2 list-none">
                      <li className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</li>
                      <li className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">Career</li>
                      <li><Link href="/Blog" className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">Blog</Link></li>
                      <li className="text-[#ffffffb3] hover:text-white transition-colors duration-300 cursor-pointer">term & Condition</li>
                    </ul>
                  </div>

                  <div className="md:col-span-6 space-y-3max-w-md">
                    <h2 className="text-white text-2xl unbounded-font mb-6">Our Newsletter</h2>
                    <p className="text-[#ffffffb3] text-sm">Send Your Email</p>
                    <form className="flex items-center border-[#ffffff4d] rounded-full mt-4 overflow-hidden">
                      <input 
                        type="email"
                        placeholder="Your Email Address"
                        className="flex-1 px-5 py-3 text-sm bg-transparent text-center text-white placeholder:text-[#ffffff99] focus:outline" 
                      />
                      <button className="bg-white cursor-pointer text-black font-semibold xl:px-6 py-3 hover:bg-gray-200 md:px-2 text-bold ">Sign Up</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>
        <div className="border-t border-[#ffffff33] mt-12 py-8">
          <p className="mt-3 md:mt-0 text-[#ffffff99] text-center">
            &copy; 2025. All Right Reserved by <a href="#" className="font-bold text-white">Hasan</a>
          </p>
        </div>
      </div>
    </>
  )
}
