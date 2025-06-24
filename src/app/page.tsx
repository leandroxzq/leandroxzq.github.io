"use client"

import Image from "next/image"

import { motion } from "framer-motion"
import { Ubuntu } from "next/font/google"
import { Press_Start_2P } from "next/font/google"

import Nav from "@/components/Nav"
import Stacks from "@/components/Stacks"
import Avatar from "@/assets/images/avatar.png"

const UbuntuText = Ubuntu({
	subsets: ["latin"],
	weight: "700",
})

const pressStart2P = Press_Start_2P({
	subsets: ["latin"],
	weight: "400",
})

export default function Home() {
	return (
		<article className="center gap-6 select-none min-h-dvh">
			<div className="flex md:flex-row flex-col gap-4">
				<section
					className={`order-2 md:order-1 flex flex-col justify-evenly gap-4 select-text max-w-80 ${pressStart2P.className}`}
				>
					<Stacks />
					<Nav />
				</section>
				<section className="order-1 md:order-2 flex flex-col items-center gap-2">
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="box-shad relative rounded-full w-64 h-64 overflow-hidden border-4 border-white"
					>
						<Image
							className=""
							src={Avatar}
							alt="Avatar generated in Copilot"
							draggable="false"
							width={320}
						/>
					</motion.div>
					<motion.h2
						className={`text-4xl tracking-wider ${UbuntuText.className}`}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						Leandroxzq
					</motion.h2>
					<motion.p
						className={`${pressStart2P.className}`}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Fullstack Developer
					</motion.p>
				</section>
			</div>
		</article>
	)
}
