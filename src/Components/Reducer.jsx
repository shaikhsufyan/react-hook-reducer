import React from 'react'
import { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) =>{
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === "DECREMENT"){
        return state - 1;
    }
    return state;
}
const Reducer = () => {
   const[state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <div>Reducer</div>
        <div style={{width:"300px", margin:"auto", backgroundColor:"black", color:"white", textAlign:"center", padding:"22px"}}>
            <h2>{state}</h2>
            <button style={{backgroundColor:"white", color:"black", fontSize:"20px",border:"none", width:"80px"}} onClick={ ()=>{dispatch({type:"INCREMENT"})}}>Inc</button>
            <button style={{marginLeft:"11px",backgroundColor:"white", color:"black", fontSize:"20px",border:"none", width:"80px"}} onClick={ ()=>{ dispatch({type:"DECREMENT"})}}>Dec</button>

        </div>
    </>
  )
}

export default Reducer