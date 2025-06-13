import { motion } from "framer-motion"

export default function AnimatedBorder() {
	return (
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
}
