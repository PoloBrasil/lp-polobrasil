import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white lg:rounded-bl-[270px] rounded-bl-[150px] relative z-10">
      <div className="container lg:pb-32 py-10 flex flex-col">
        <div className="self-end flex gap-5 mb-5">
            <Link href={"https://wa.me/5511995100364"} target="_blank">
                <Image src={"/whats.svg"} alt="WhatsApp" priority className="hover:translate-y-1 transition-all duration-300" width={35} height={35} />
            </Link>
            <Link href={"https://www.instagram.com/polobrasil.log/"} target="_blank">
                <Image src={"/insta.svg"} alt="Instagram" priority className="hover:translate-y-1 transition-all duration-300" width={35} height={35} />
            </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-10">
            <Image src={"/polo-brasil.svg"} alt="Polo Brasil Centro Logístico" priority className="hidden lg:block" width={370} height={100} />
            <Image src={"/polo-brasil.svg"} alt="Polo Brasil Centro Logístico" priority className="block lg:hidden" width={250} height={100} />
            <h2 className="md:text-3xl text-xl text-center md:text-start font-bold leading-tight text-green_dark">
                GALPÕES À MEDIDA DA SUA LOGÍSTICA.
            </h2>
        </div>
      </div>
    </header>
  );
}