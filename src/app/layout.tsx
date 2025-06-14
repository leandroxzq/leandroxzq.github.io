import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Cursor from "@/components/Cursor"
import Hero from "@/components/Hero"

import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "leandroxzq",
	description: "personal portfolio page",
	icons: {
		icon: ["favicon.ico"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Hero>
					<MantineProvider>
						<Cursor />
						{children}
					</MantineProvider>
				</Hero>
			</body>
		</html>
	)
}
