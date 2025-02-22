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
        <div className="h-screen flex p-4">
            {/* LEFT */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start h-16 gap-3"
                >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                    <span className="hidden lg:block font-semibold">
                        Wizard School
                    </span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] h-max bg-[#F7F8FA]">
                <Navbar />
                {children}
            </div>
        </div>
    );
}