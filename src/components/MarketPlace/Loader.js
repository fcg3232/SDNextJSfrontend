import React from 'react'
// import logoo from "./../assets/images/logoo.png";
import  loader  from './../../assets/images/loader.svg';
// import  loadeer  from './../../assets/images/loadeer.gif';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col"
    // <div 
    style={{hight:"100px", width:"100px", color:"white", fill:"white"}}
    >
      <img  src={loader} alt="loader" className="w-[5px] h-[5px] object-contain"/>
      {/* <p className="mt-[20px] font-epilogue font-bold text-[20px] text-black text-center"> It take some times<br /> Please wait...</p> */}
    </div>
  )
}

export default Loader