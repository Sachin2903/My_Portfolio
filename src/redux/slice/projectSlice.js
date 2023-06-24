import { createSlice } from "@reduxjs/toolkit";
import { data } from "./dummyData";
export const projectSlice=createSlice({
    initialState:[...data].slice(0,3),
    name:"project",
    reducers:{
    changeMainImg:((state,action)=>{
       state.map((e)=>{
        if(e.id===action.payload.i){
           e.mainsrc=e.minsrc[action.payload.iTo]
           const a=e.srcArray.map((e,i)=>{
            if(i===action.payload.iTo)
            return false;
            return true;
           })
           e.srcArray=a;
        }
         return e;  
                
       })
       return state;
    }),
    seemore:((state,action)=>{
      if(action.payload)
        return [...data].slice(0,3)
       else
       return [...data]
    })

    





    }
})