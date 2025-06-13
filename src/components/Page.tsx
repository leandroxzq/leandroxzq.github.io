import Nav from "@/components/Nav"

export default function Page({ children }) {
	return (
		<main className="flex gap-4 md:pt-7 pt-3 px-4 select-none min-h-screen">
			<Nav showBackButton excludeCurrentLink showPathname></Nav>
			<div className="w-10/12 max-w-3xl p-4 sm:px-6 lg:px-8">{children}</div>
		</main>
	)
}
