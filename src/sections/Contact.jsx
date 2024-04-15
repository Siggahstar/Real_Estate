import React from 'react'

const Contact = ({darkMode}) => {
  return (
    <section id='contact' className= {`${darkMode? "bg-black": "bg-red-100 p-10"}`}>
    <div  className={`flex justify-around p-10`}> 
      <div className={`flex flex-col gap-4 p-10 ${darkMode? "bg-slate-900 text-white" : "bg-white" }  w-[600px] rounded-lg`}>
        <p>  Message us now</p>
        <input type="text" placeholder='Enter your full name here' className='border-2 p-3 rounded-md ' />
        <input type="text" placeholder='enter your email' className='border-2 p-3 rounded-md ' />
        <input type="text" placeholder='enter your mobile number here' className='border-2 p-3 rounded-md '/>
        <input type="text" placeholder='enter your message' className='border-2 px-3 rounded-md h-[300px]  mt-1 pb-[240px] ' />
        <button className='bg-red-500 rounded-md p-3 '> SEND MAIL</button>
      </div>
      <div>
        <p>REACH US</p>
        <h1>Get in touch with us today and our team will assist you</h1>
        <p className='max-w-[350px]'>Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.</p>
      </div>
    </div>
    </section>
  )
}

export default Contact
