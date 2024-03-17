import React, { useState } from 'react'
import Navbar from './subComponet/Navbar'

const Home = () => {
    const [selct,setselect]=useState("about")
 function myfunction(e){
   setselect(e.target.innerHTML)
 }
 
 return (
    <div id="main_section">
        {/* Intro section */}
        <div id="intro">
       <h1>siva</h1>

        </div>
        {/* funcality */}
        <div id="body_section" onClick={((e)=>{
                myfunction(e)
            })} >
            <Navbar/>
            <iframe src={selct}  title='shiva' style={{border:"none", width:"100%",
          height:"100%"}}>
                
            </iframe>
     </div>
     <div>
  
</div>
    </div>
  )
}

export default Home