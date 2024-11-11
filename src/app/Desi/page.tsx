
import{ resolve} from "path";

export default async function Desi(){
    await new Promise((resolve)=>{
      setTimeout(resolve,5000);
    })
   
      return(
        <div  className="bg-slate-500 h-screen">
            <h1 className=" text-pretty text-white" >Daal Chawal</h1>
            <h2 className=" text-pretty text-white"> Biryani </h2>
            <h3 className=" text-pretty text-white"> Others </h3>
        </div>
      )
    }


