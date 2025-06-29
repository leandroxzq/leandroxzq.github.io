import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ArrowLeft, Cog } from "lucide-react"
import { Press_Start_2P } from "next/font/google"

const pressStart2P = Press_Start_2P({
	subsets: ["latin"],
	weight: "400",
})

const navItems = [
	{ label: "About", href: "/about" },
	{ label: "Projects", href: "/projects" },
	{ label: "Blog", href: "/blog" },
]

interface NavProps {
	showBackButton?: boolean
	excludeCurrentLink?: boolean
	showPathname?: boolean
}

export default function Nav({
	showBackButton = false,
	excludeCurrentLink = false,
	showPathname = false,
}: NavProps) {
	const pathname = usePathname()

	const isindex = pathname === "/"

	return (
		<nav
			className={`${
				pressStart2P.className
			} flex flex-col items-center gap-4 ${
				isindex ? "w-full" : "w-full sm:w-2/12"
			}`}
		>
			{showBackButton && showPathname && (
				<div className="flex justify-between items-center w-full gap-2 sm:gap-4">
					<Link
						href="/"
						aria-label="Voltar para a home"
						className="hover:text-yellow-300 self-start active:scale-95 transition ease-in-out"
					>
						<ArrowLeft size={32} />
					</Link>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 1, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="text-1xl"
					>
						{pathname}
					</motion.p>
				</div>
			)}

			{navItems
				.filter((item) => !excludeCurrentLink || item.href !== pathname)
				.map(({ label, href }, i) => (
					<motion.div
						key={label}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: i * 0.3 }}
						className="w-full"
					>
						<div
							className={`w-full center text-sm p-2 border rounded-md text-center ${
								href === "/blog"
									? "border-gray-400 text-gray-400 opacity-50 cursor-not-allowed"
									: "border-yellow-300 hover:bg-white hover:text-black active-button"
							}`}
						>
							{href === "/blog" ? (
								<div
									className="center gap-2"
									aria-disabled="true"
								>
									{label}
									<motion.div
										initial={{ rotate: 0 }}
										animate={{ rotate: 180 }}
										transition={{
											duration: 5,
											repeat: Infinity,
											ease: "linear",
										}}
									>
										<Cog />
									</motion.div>
								</div>
							) : (
								<Link href={href} className="center gap-2">
									{label}
								</Link>
							)}
						</div>
					</motion.div>
				))}
		</nav>
	)
}
