import dynamic from 'next/dynamic';
const Header = dynamic(() => import("@/components/Header"));
const Info = dynamic(() => import("@/components/Info"));

export default function Home() {
  return (
    <main className="bg-green_dark relative">
      <Header />
      <div className="w-[340px] md:w-[27vw] 2xl:w-[34vw] lg:h-[500px] md:h-[350px] h-[400px] absolute top-0 -left-10 rounded-br-3xl rounded-bl-[100px] bg-lime" />
      <Info />
      <div className="w-[340px] md:w-[27vw] 2xl:w-[34vw] lg:h-[160px] md:h-[145px] h-14 absolute bottom-0 -left-10 rounded-tr-3xl bg-lime" />
    </main>
  );
}
