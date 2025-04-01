import Image from "next/image";
import Link from "next/link";

export default function Info() {
  return (
    <div className="container lg:mt-40 mt-32">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-around">
        <div className="overflow-hidden rounded-br-3xl rounded-bl-[120px] rounded-tl-3xl rounded-tr-[50px] aspect-square md:max-w-[450px] w-full relative">
            <Image src={"/man-warehouse.jpg"} alt="What's Polo Brasil Centro Logístico" priority className="object-cover object-right" fill />
        </div>

        <div className="flex flex-col lg:gap-24 gap-12 items-center">
            <div className="uppercase font-bold text-white flex gap-5 items-center">
                <p className="lg:text-3xl text-xl tracking-normal">
                    <span className="lg:text-4xl text-2xl tracking-wider">Galpões</span> <br /> a partir de
                </p>
                <div className="w-0.5 bg-lime h-20" />
                <p className="lg:text-5xl text-2xl font-semibold mb-2"><span className="lg:text-7xl text-4xl">2.500</span> m²</p>
            </div>

            <Link href={"https://wa.me/5511995100364"} target="_blank" className="bg-white hover:bg-grey transition-all duration-500 rounded-[32px] py-3 md:px-16 w-full md:w-auto text-center text-xl lg:text-2xl text-green_dark font-bold">
                ENTRE EM CONTATO <br /> E SAIBA MAIS
            </Link> 
        </div>
      </div>

      <p className="text-start flex md:justify-center w-full text-sm lg:text-lg text-white md:py-20 pt-12 pb-24">
        Av. Ayrton Senna da Silva, (ROD. BR-364, km 497). <br />Lot. Nova Esperança (Dist. Industriário), Cuiabá-MT, CEP 78099-499
      </p>
    </div>
  );
}