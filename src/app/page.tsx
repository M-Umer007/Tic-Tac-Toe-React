import { Boxes } from "@/components/boxes/page";

export default function Home() {
  return (


    <div className="flex flex-col justify-center items-center bg-slate-900 text-white min-w-screen min-h-screen ">
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold m-auto">
    Tic Tac Toe Game using <span><span className="bg-white text-black rounded-lg border border-solid px-2 py-1">Next.js</span>,  <span className="text-blue-400">React</span>, &nbsp;<span className="bg-[#3178c6] text-white rounded-lg px-2 py-1">TypeScript</span></span>
      </div>
       
      <div className="my-auto">
         <Boxes/>     
      </div>
      
    </div>


  );
}
