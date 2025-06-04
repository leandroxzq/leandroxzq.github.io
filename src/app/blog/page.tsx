"use client"

import Nav from "@/components/Nav"

export default function Blog() {
	return (
		<main className="md:pt-7 pt-3 select-none min-h-screen flex">
			<Nav showBackButton excludeCurrentLink showPathname></Nav>
			<div className="w-10/12"></div>
		</main>
	)
}
