import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="w-[21%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start  gap-3 px-2 text-gray-700 py-2"
                >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="block"
                        priority
                    />
                    <span className="hidden lg:block font-bold text-xl">
                        Wizard School
                    </span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="bg-[#e4e4e4] w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-auto flex flex-col">
                <div className="px-4 h-full">
                    <Navbar />
                        {children}
                </div>
            </div>
        </div>
    );
}