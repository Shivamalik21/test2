import React from 'react'


const Contact = () => {
  
  return (
    <div>
    <h1>Contact</h1>
    <div style={{marginTop:"7%", textAlign:'center', display:"flex", flexDirection:"column", border:"1px solid red",
  height:"79vh",}}>
      <div style={{border:"1px solid green", height:"30vh"}}>
        <p>Email</p>
        <input></input>
      </div>
      <div style={{border:"1px solid red", height:"30vh"}} >
        <p>Schedule Video Call for me:</p>
      </div>
      <div>
        <p>Socials</p>
        <ul>
         <li></li>
         <li></li>
         <li></li>
         <li></li>

        </ul>
      </div>
      <div></div>
    </div>
  
    </div>
  )
}

export default Contact