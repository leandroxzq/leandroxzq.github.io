import { motion } from "framer-motion"
import {
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaHtml5,
	FaCss3Alt,
	FaJs,
} from "react-icons/fa"

import {
	SiTypescript,
	SiTailwindcss,
	SiMongodb,
	SiNextdotjs,
	SiJest,
	SiBootstrap,
	SiSass,
	SiMui,
	SiMysql,
} from "react-icons/si"

import { BiLogoPostgresql } from "react-icons/bi"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const stacks = [
	{ icon: <FaJs style={{ color: "#f0db4f" }} /> },
	{ icon: <SiTypescript style={{ color: "#3178c6" }} /> },
	{ icon: <FaNodeJs style={{ color: "#68a063" }} /> },
	{ icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
	{ icon: <FaCss3Alt style={{ color: "#264de4" }} /> },
	{ icon: <SiNextdotjs style={{ color: "#ffffff" }} /> },
	{ icon: <FaReact style={{ color: "#61DBFB" }} /> },
	{ icon: <SiJest style={{ color: "#99425b" }} /> },
	{ icon: <SiBootstrap style={{ color: "#7952B3" }} /> },
	{ icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
	{ icon: <SiSass style={{ color: "#cd6799" }} /> },
	{ icon: <SiMui style={{ color: "#007FFF" }} /> },
	{ icon: <BiLogoPostgresql style={{ color: "#336791" }} /> },
	{ icon: <SiMysql style={{ color: "#00758F" }} /> },
	{ icon: <SiMongodb style={{ color: "#4DB33D" }} /> },
	{ icon: <FaGitAlt style={{ color: "#f1502f" }} /> },
]

export default function Stacks() {
	return (
		<motion.nav
			className="w-full mx-auto"
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8 }}
		>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={30}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 800,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 5 },
				}}
				className="py-4"
			>
				{stacks.map((stack, index) => (
					<SwiperSlide key={index} className="flex justify-center">
						<div className="flex items-center justify-center rounded-xl text-4xl shadow-md hover:scale-110 transition-transform">
							{stack.icon}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.nav>
	)
}
