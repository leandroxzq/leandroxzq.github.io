"use client"

import Image from "next/image"

import { Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Ubuntu } from "next/font/google"
import { Press_Start_2P } from "next/font/google"

import Nav from "@/components/Nav"
import Avatar from "@/assets/images/avatar.png"

const UbuntuText = Ubuntu({
	subsets: ["latin"],
	weight: "700",
})

const pressStart2P = Press_Start_2P({
	subsets: ["latin"],
	weight: "400",
})

const navSocial = [
	{
		icon: <Linkedin size={30} />,
		href: "https://linkedin.com/in/leandrosilvaz",
	},
	{ icon: <Github size={30} />, href: "https://github.com/leandroxzq" },
]

export default function Home() {
	return (
		<article className="center gap-6 select-none min-h-screen">
			<section
				className={`center flex-col gap-4 select-text ${pressStart2P.className}`}
			>
				<motion.nav
					className="center gap-8"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					{navSocial.map(({ icon, href }, i) => (
						<a
							className="hover:text-yellow-300 active-button"
							key={i}
							href={href}
							target="_blank"
						>
							{icon}
						</a>
					))}
				</motion.nav>
				<motion.h2
					className={`text-5xl tracking-wider ${UbuntuText.className}`}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Leandroxzq
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Fullstack Developer
				</motion.p>
				<Nav />
			</section>
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7 }}
				className="rounded-full md:w-80 md:h-80 overflow-hidden hidden md:block border-4 border-white"
			>
				<Image
					className=""
					src={Avatar}
					alt="Avatar generated in Copilot"
					draggable="false"
					width={320}
				/>
			</motion.div>
		</article>
	)
}
