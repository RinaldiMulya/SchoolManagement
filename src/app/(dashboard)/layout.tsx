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
        <div className="flex h-full">
            {/* LEFT */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#f5f5f5] h-full">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start h-16 gap-3 mx-4 md:px-2 text-gray-700 py-2"
                >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                    <span className="hidden lg:block font-bold text-xl">
                        Wizard School
                    </span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="flex-1 bg-[#e4e4e4] h-full overflow-auto">
                <div className="p-2 h-full">
                    <Navbar />
                    <div className="h-[calc(100%-2rem)]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}