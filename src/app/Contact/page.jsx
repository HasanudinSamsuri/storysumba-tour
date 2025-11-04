import { faFacebook, faInstagram, faTiktok, faWhatsapp, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faAddressCard, faAngleRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function page() {
  return (
    <>
    {/* Page Title */}
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py:[50px] lg:-[90px] min-h-[450px] lg:-min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">Contact</h2>
        <ul className="text-white z-10 flex items-center gap-8 section-list">
            <li className="text-sm relative">
                <Link href="/" className="">Home</Link>
            </li>
            <li className="text-sm relative">
                <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5"/>
                <Link href="/Contact">Contact</Link>
            </li>
        </ul>
      </div>

    {/* Contact Page */}
      <div className="contact-page px-[2%] sm:px-[8%] lg:-px-[12%] py-[50px] lg:-[90px]">
        <div className="contact-section p-[50px] rounded-[20px] bg-[#0e0700] flex flex-col lg:flex-row">
            <div className="w-[40%]">
                <div className="contact-content mb-6">
                    <span className="uppercase text-[#7a7a7a]">Office Address</span>
                    <p className="text-white mt-3 text-[18px]">Jl. Desa Sawangan No. 11, Nusa Dua, Bali</p>
                </div>
                <div className="contact-content mb-6">
                    <span className="uppercase text-[#7a7a7a]">Office Phone Number</span>
                    <p className="text-white mt-3 text-[18px]">0812-8776-3530</p>
                </div>
                <div className="contact-content mb-6">
                    <span className="uppercase text-[#7a7a7a]">Email Address</span>
                    <p className="text-white mt-3 text-[18px]">booking@sumbastory.com</p>
                </div>
                <div className="contact-content">
                    <p className="mt-3 text-[24px] text-white">Follow Our Social Media</p>
                    <div className="contact-icons flex gap-3 mt-3">
                        <FontAwesomeIcon icon={faInstagram} className="text-[22px] text-white"/>
                        <FontAwesomeIcon icon={faXTwitter} className="text-[22px] text-white"/>
                        <FontAwesomeIcon icon={faFacebook} className="text-[22px] text-white"/>
                        <FontAwesomeIcon icon={faYoutube} className="text-[22px] text-white"/>
                        <FontAwesomeIcon icon={faTiktok} className="text-[22px] text-white"/>
                    </div>
                </div>
            </div>
            <div className="w-[60%]">
                <form>
                    <div className="mb-5">
                        <label className="text-sm text-white mb-2 uppercase">Contact Us</label>
                        <textarea 
                            rows="5" 
                            placeholder="Your Message"
                            className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]">
                        </textarea>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-6 mb-5">
                        <div className="flex-1 mb-5 md:mb-0">
                            <label className="text-sm text-white mb-2 uppercase">Name</label>
                            <input 
                                type="text" 
                                placeholder="Your Name"
                                className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]"
                            />
                        </div>
                        <div className="flex-1 mb-5 md:mb-0">
                            <label className="text-sm text-white mb-2 uppercase">Email</label>
                            <input 
                                type="text" 
                                placeholder="Your Email"
                                className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]"
                            />
                        </div>
                    </div>
                    <button 
                        type="submit"
                        className="mt-5 uppercase w-full px-6 py-3 bg-white rounded-[50px] hover:bg-[#193555] font-semibold cursor-pointer"
                        >Send
                    </button>
                </form>
            </div>
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62900.49639866767!2d120.29011303975369!3d-9.826747934919634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c7d59e7d9ba6f%3A0xab31e69ead72d4dd!2sLaindeha%2C%20Kec.%20Pandawai%2C%20Kabupaten%20Sumba%20Timur%2C%20Nusa%20Tenggara%20Tim.!5e0!3m2!1sid!2sid!4v1762005702528!5m2!1sid!2sid" width="100%" height="500" loading="lazy"></iframe>
    </>
  )
}
