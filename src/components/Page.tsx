import Nav from "@/components/Nav";

export default function Page({ children }) {
  return (
    <main className="flex flex-col sm:flex-row gap-4 md:pt-7 pt-3 px-4 select-none min-h-screen">
      <Nav showBackButton excludeCurrentLink showPathname></Nav>
      <div className="w-full max-w-3xl sm:px-6 lg:px-8 sm:w-10/12">
        {children}
      </div>
    </main>
  );
}
