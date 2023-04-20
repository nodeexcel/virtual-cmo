import React from 'react'
import Logo from './common/logo';
import logo from '../assets/Frame6.png'
const Loader = () => {
  return (
    <div>
        
      <Logo color={'text-blue-500'} />
      
      <img className='m-auto mt-[6%]' src={logo}/>
      <div className=' m-auto w-[50%] h-6 border-4 border-gray-200 rounded-lg  bg-blue-500 animate-loader-line'></div>
      <h3 className='text-blue-500 m-auto flex justify-center text-xl mt-[1%] font-bold text-centre'>Scanning through your Website</h3>
    </div>
  )
}

export default Loader;
