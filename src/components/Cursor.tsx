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
			className="pointer-events-none fixed top-0 left-0 z-50 w-4 h-4 rounded-full bg-white mix-blend-difference"
			animate={{
				x: position.x - 8,
				y: position.y - 8,
			}}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 30,
			}}
		/>
	)
}
