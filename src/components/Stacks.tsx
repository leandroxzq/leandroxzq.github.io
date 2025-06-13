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
	{ icon: <FaJs className="box-shad center" style={{ color: "#f0db4f" }} /> },
	{ icon: <SiTypescript className="box-shad" style={{ color: "#3178c6" }} /> },
	{ icon: <FaNodeJs className="box-shad" style={{ color: "#68a063" }} /> },
	{ icon: <FaHtml5 className="box-shad" style={{ color: "#e34c26" }} /> },
	{ icon: <FaCss3Alt className="box-shad" style={{ color: "#264de4" }} /> },
	{ icon: <SiNextdotjs className="box-shad" style={{ color: "#ffffff" }} /> },
	{ icon: <FaReact className="box-shad" style={{ color: "#61DBFB" }} /> },
	{ icon: <SiJest className="box-shad" style={{ color: "#99425b" }} /> },
	{ icon: <SiBootstrap className="box-shad" style={{ color: "#7952B3" }} /> },
	{ icon: <SiTailwindcss className="box-shad" style={{ color: "#38bdf8" }} /> },
	{ icon: <SiSass className="box-shad" style={{ color: "#cd6799" }} /> },
	{ icon: <SiMui className="box-shad" style={{ color: "#007FFF" }} /> },
	{
		icon: (
			<BiLogoPostgresql className="box-shad" style={{ color: "#336791" }} />
		),
	},
	{ icon: <SiMysql className="box-shad" style={{ color: "#00758F" }} /> },
	{ icon: <SiMongodb className="box-shad" style={{ color: "#4DB33D" }} /> },
	{ icon: <FaGitAlt className="box-shad" style={{ color: "#f1502f" }} /> },
]

export default function Stacks() {
	return (
		<motion.nav
			className="center w-full mx-auto"
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
				slidesPerView={5}
				className="center h-full min-h-32 px-6"
			>
				{stacks.map((stack, index) => (
					<SwiperSlide key={index} className="center h-full min-h-32">
						<div className="center h-full rounded-xl text-3xl shadow-md hover:scale-110 transition-transform">
							{stack.icon}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.nav>
	)
}
