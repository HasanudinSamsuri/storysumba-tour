
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import BlogPage01 from "../../assets/Blog-Page-01.png"
import BlogPage02 from "../../assets/Blog-Page-02.png"
import BlogPage03 from "../../assets/Blog-Page-03.png"
import BlogPage04 from "../../assets/Blog-Page-04.png"
import BlogPage05 from "../../assets/Blog-Page-05.png"
import BlogPage06 from "../../assets/Blog-Page-06.png"

import Link from "next/link";

export default function page() {
  return (
    <>
      {/* Page Title */}
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
            <h2 className="text-6xl font-normal z-10 relative text-white text-center w-full unbounded-font">Blog</h2>
            <ul className="text-white z-10 flex items-center gap-8 section-list">
                <li className="text-sm relative">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-sm relative">
                    <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5"/>
                    <Link href="/Blog">Blogs</Link>
                </li>
            </ul>
      </div>

      {/* Blog */}
      <div className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]   ">
            <div className="w-full pb-5">
                <h1 className="unbounded-font text-4xl font-semibold pb-3">About Sumba</h1>
                <p className="text-[#193555]">
                    Sumba adalah salah satu pulau tercantik di timur Indonesia, dengan alam yang indah, binatang pandemik, makanan khas dan kaya nilai budaya yang wajib dijelajahi.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    <p className="text-[#7a7a7a] text-sm">Tenun khas sumba timur adalah salah satu warisan budaya paling terkenal dari pulau sumba, NTT. Tenun ini bukan sekedar kain, tapi juga mengandung makna sinbolik.</p>
                </div>
                <div className="blog-card">
                    <Image src={BlogPage04} alt="blogpage04" className="rounded-[20px] w-[300px] h-[300px]" />
                    <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">Katupek: Makanan Khas Sumba</h2>
                    <p className="text-[#7a7a7a] text-sm">Katupek, yaitu hidangan nasi dengan lauk daging dan sayur, serundeng atau suwiran daging kering, dan sate.</p>
                </div>
                <div className="blog-card">
                    <Image src={BlogPage05} alt="blogpage05" className="rounded-[20px] w-[300px] h-[300px]" />
                    <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">Pasola: Upacara tradisional khas Sumba</h2>
                    <p className="text-[#7a7a7a] text-sm">Pasola adalah upacara adat masyarakat Sumba yang merupakan bagian dari ritual Marapu, kepercayaan tradisional setempat.</p>
                </div>
                <div className="blog-card">
                    <Image src={BlogPage06} alt="blogpage06" className="rounded-[20px] w-[300px] h-[300px]" />
                    <h2 className="font-semibold text-lg sm:text-xl mt-6 unbounded-font mb-2">katambung : Alat Musik Tradisional Sumba</h2>
                    <p className="text-[#7a7a7a] text-sm">katambung adalah alat musik pukul tradisional dari Sumba yang terbuat dari kayu dan dimainkan dengan cara dipukul.</p>
                </div>
            </div>
       </div>
    </>
  )
}
