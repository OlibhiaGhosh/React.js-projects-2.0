import { useState } from "react"
import Infodisplay from "./infodisplay"
const Finduser= () =>{
    const[Name , setName] = useState("")
    const[isdisplay , setisDisplay] = useState(false)
    function checkname(){
        if(Name ==="" || Name=== null || Name === undefined){
            return false;
        }else{
            return true;
        }
    }
    return(
        <>
         <div className="Container">
            <h1>Find user from Github</h1>
            <div className="searchfield">
                <input type="text" placeholder="Enter the name" value={Name} onChange={(e)=> setName(e.target.value)} />
                <button onClick={() => setisDisplay(true)}>Search</button>
            </div>
            {isdisplay&&<div className="Info">
            {
                checkname({Name}) ? 
                <Infodisplay Name={Name}/> : 
                <p>Please Initiate a Search!!!</p>
            }
            </div>}
         </div> 
        </>
    )
}
export default Finduser