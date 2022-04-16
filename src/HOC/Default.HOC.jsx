import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import DefaultLayout from "../layouts/Default.layout";




const DefaultHOC=({component:Component,...rest})=>{
//components,path,exact

//const Component=component

const Wrapdefaultlayout=(props)=>{
    return(
        <>
         <DefaultLayout>
        <Component {...props}/>
        </DefaultLayout>
        </>
    )
   
}


    return (
    
    <>
    
    <Routes>
        
        <Route {...rest} element={ <Wrapdefaultlayout/>} />

     </Routes>

    </>
    
    )
}

export default DefaultHOC;