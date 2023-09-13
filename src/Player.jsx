import { useState } from "react"

export default function Player(){
    const [count,setCount]=useState(11);
    const  AddPlayer=() => {
        const newPlayer=count+1;
        setCount(newPlayer);
    }
    const RemovePlayer=()=>{
        const removePlayer=count-1;
        setCount(removePlayer);
    }
    return(
        <div>
            <h3>Player: {count} </h3>
            <button onClick={AddPlayer} >ADD</button>
            <button onClick={RemovePlayer}>REMOVE</button>
        </div>
    )
}