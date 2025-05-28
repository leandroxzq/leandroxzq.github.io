"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const move = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener("mousemove", move)
		return () => window.removeEventListener("mousemove", move)
	}, [])

	return (
		<motion.div
			className="pointer-events-none fixed top-2 left-2 z-50 w-4 h-4 rounded-full bg-white mix-blend-difference"
			animate={{
				x: position.x - 16,
				y: position.y - 16,
			}}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 30,
			}}
		/>
	)
}
