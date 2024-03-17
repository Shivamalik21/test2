import React from 'react'
const data=require("./../../component/Data/Data.json")
const Certificate = () => {
  return (
    <div>
      <h1>My Certificate</h1>
      <div style={{width:"100%", height:"80vh", marginTop:"5%", border:"1px solid red"}}>
        {data.map((e)=>{
          
        if(e.id==="certificate"){
        e.Mycertificate.map((e)=>{
          if(e.heading==="Technical Comp"){
           e.certificate.map((e,index)=>{
            return(
              <div key={index}>
         <h1>{e.Header}</h1>
              </div>
          )
           })
          }
        })
        }
         
        })}
      </div>
    </div>
  )
}

export default Certificate