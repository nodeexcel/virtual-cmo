import React from 'react';
import Arrow from '../../assets/Arrow.png';

function Ctas({setCurrScreen}) {
  return (
    <>
    <div className='flex justify-center'>
      <h1 className='text-3xl mt-[2%] text-gray-700 flex justify-center '>Shop Now! </h1>
      <img className='mt-[-2%]'  src={Arrow}/>
      </div>
      <div className='flex justify-center'>
      <h1 className='text-3xl mt-[2%] text-gray-700 flex justify-center '>Shop Now! </h1>
      <img className='mt-[-2%]'  src={Arrow}/>
      </div>
      <div className='flex justify-center'>
      <h1 className='text-3xl mt-[2%] text-gray-700 flex justify-center'>Shop Now! </h1>
      <img className='mt-[-2%]' src={Arrow}/>
      </div>
      <div className='flex justify-center'>
      <h1 className='text-3xl mt-[2%] text-gray-700 flex justify-center'>Shop Now!</h1>
      <img className='mt-[-2%]' src={Arrow}/>
      </div>
      <div className='flex justify-center'>
      <h1 className='text-3xl mt-[3%] text-gray-700 flex justify-center'>Shop Now! </h1>
      <img  className='mt-[-2%]' src={Arrow}/>
      </div>
      
      <div className="flex  mt-4 m-auto justify-center ">
        
        <button
        onClick={() => {
          setCurrScreen(4);
        }} class="bg-blue-500  font-bold text-sm rounded-lg py-2 px-2 mr-8 hover:bg-blue-500 text-slate-50  flex items-center justify-center hover:text-white  border border-blue-500 hover:border-transparent ">
          Email these assets
        </button>
        <button class="bg-transparent   rounded-lg py-2 px-2 hover:bg-blue-500 text-blue-700 text-sm flex items-center justify-center hover:text-white   border border-blue-500 hover:border-transparent ">
         Set up on Google Ads

        </button>
        </div> 
        </>
    
  )
}

export default Ctas
