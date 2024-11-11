import Link from "next/link"

export default function Navbar(){
    return(
        
        <ul className="flex gap-4 bg-orange-800 text-2xl p-0  ">
            
            {/* Logo */}
            <div className=" text-gray-950 text 2xl font-bold">AM restaurant</div>
             
           <li><Link href="/">Home</Link></li>
           <li><Link href="/about">About</Link></li>
           <li>< Link href="/Contact">Contact</Link></li>
           <li><Link href="/Continental">Continental</Link ></li>
           <li><Link href="/Desi">Desi</Link ></li>
           
        </ul>
        
        
        )
}