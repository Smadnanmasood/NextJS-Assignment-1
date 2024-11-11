import Navbar from "./component/Navbar";
import Image from "next/image";
import menu from "../../image/menu.jpg"

export default function Home() {
  return (
    <div>
      <h1 className="flex items-center text-center justify-center text-4xl bg-gray-950 text-white">Welcome to  AM Restaurant </h1>
      <Image src={menu} alt="menu" className=" w-[1650px] h-[660px] " />
    </div>
  );
}



