"use client"

import Image from "next/image"
import Link from "next/link"

import { Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Press_Start_2P } from "next/font/google"

import Avatar from "@/assets/images/avatar.png"

const pressStart2P = Press_Start_2P({
	subsets: ["latin"],
	weight: "400",
})

const navItems = [
	{ label: "Stacks", href: "/" },
	{ label: "Projects", href: "/" },
	{ label: "Blog", href: "/" },
]

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
				className={`center flex-col gap-3 select-text ${pressStart2P.className}`}
			>
				<motion.nav
					className="center gap-8"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					{navSocial.map(({ icon, href }, i) => (
						<a key={i} href={href}>
							{icon}
						</a>
					))}
				</motion.nav>
				<motion.h2
					className="text-4xl"
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
				<nav className="flex gap-6 mt-2">
					{navItems.map(({ label, href }, i) => (
						<motion.button
							key={label}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: i * 0.3 }}
						>
							<Link
								href={href}
								className="text-sm p-2 border-[1px] border-yellow-300 rounded-md hover:bg-white hover:text-black"
							>
								{label}
							</Link>
						</motion.button>
					))}
				</nav>
			</section>
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7 }}
			>
				<Image
					className="rounded-full"
					src={Avatar}
					alt="Avatar generated in Playground"
					draggable="false"
					width={320}
				/>
			</motion.div>
		</article>
	)
}
