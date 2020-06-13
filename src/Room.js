import React, {useState} from "react"
import "./room.css"


function Room (){

    let [isLit , setLit] = useState(true);
    let [inc , increamentByOne] = useState(22)

    function updateLight(){

        setLit(!isLit);
    }
    return (

        <div className = {`room ${isLit ? "lit" : "dark"}`}>
            
            <h1>the room is : {isLit ? "lit" : "dark"} </h1>

            <button onClick={updateLight}> toggle light </button>
            <br></br>


            <div className = "row" >

                    <button onClick = {()=> setLit(isLit=true)} > Open </button>
                    <button onClick = {()=> setLit(isLit=false)} > Close </button>
            </div>


            <h1> the Temperatur is  {inc} Celsius  </h1>
            
            <div className="row">

                    <button onClick={()=> increamentByOne(++inc)} > increament </button>
                    <button onClick={()=> increamentByOne(--inc)} > dicreament </button>
            </div>


        </div>
    )
}
export default Room;