// src/components/StacksCarousel.tsx
"use client"

import Nav from "@/components/Nav"

export default function Stacks() {
	return (
		<main className="md:pt-7 pt-3 select-none min-h-screen">
			<Nav showBackButton excludeCurrentLink showPathname></Nav>
			<div className="w-10/12"></div>
		</main>
	)
}
