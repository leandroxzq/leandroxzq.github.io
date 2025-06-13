"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Page from "@/components/Page"
import { motion } from "framer-motion"
import { Press_Start_2P } from "next/font/google"

const pressStart2P = Press_Start_2P({
	subsets: ["latin"],
	weight: "400",
})

const AnimatedBorder = () => (
	<div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
		{/* Top border */}
		<motion.div
			className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
			initial={{ x: "-100%" }}
			animate={{ x: "100%" }}
			transition={{
				repeat: Infinity,
				duration: 1,
				ease: "linear",
			}}
		/>
		{/* Right border */}
		<motion.div
			className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent"
			initial={{ y: "-100%" }}
			animate={{ y: "100%" }}
			transition={{
				repeat: Infinity,
				duration: 1,
				ease: "linear",
				delay: 0.6,
			}}
		/>
		{/* Bottom border */}
		<motion.div
			className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-yellow-300 to-transparent"
			initial={{ x: "100%" }}
			animate={{ x: "-100%" }}
			transition={{
				repeat: Infinity,
				duration: 2,
				ease: "linear",
				delay: 1,
			}}
		/>
		{/* Left border */}
		<motion.div
			className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-transparent via-yellow-300 to-transparent"
			initial={{ y: "100%" }}
			animate={{ y: "-100%" }}
			transition={{
				repeat: Infinity,
				duration: 2,
				ease: "linear",
				delay: 2,
			}}
		/>
	</div>
)

export default function About() {
	return (
		<Page>
			<div className="space-y-8">
				<section className="relative dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-hidden">
					<AnimatedBorder />
					<div className="relative z-10">
						<h3
							className={`text-xl font-semibold mb-4 ${pressStart2P.className}`}
						>
							About Me
						</h3>
						<p className="leading-relaxed">About me</p>
					</div>
				</section>

				<section className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-hidden">
					<AnimatedBorder />
					<div className="relative z-10">
						<h3
							className={`text-xl font-semibold text-gray-800 dark:text-white mb-4 ${pressStart2P.className}`}
						>
							Contact
						</h3>
						<div className="space-y-3">
							<a
								className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								href="https://github.com/leandroxzq"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="w-5 h-5" />
								<span>leandroxzq</span>
							</a>
							<a
								className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								href="https://www.linkedin.com/in/leandrosilvaz/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="w-5 h-5" />
								<span>leandrosilvaz</span>
							</a>

							<p className="flex gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
								<Mail className="w-5 h-5" />
								<span>leandrosilvazw25@gmail.com</span>
							</p>
						</div>
					</div>
				</section>
			</div>
		</Page>
	)
}
