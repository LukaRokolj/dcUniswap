import React from 'react';
import { BsChevronDown, BsInboxFill } from 'react-icons/bs';

const Pool = ({wallet, setWallet}) => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] pt-24 pb-8'>
      <div className='md:w-1/2 w-11/12 flex flex-col justify-center items-center space-y-2'>
        <div className='flex flex-row w-full justify-between items-center'>
          <h1 className='text-white text-2xl font-semibold'>
            Pools
          </h1>
          <div className='flex flex-row items-center space-x-2'>
            <div className='flex flex-row space-x-1 items-center border rounded-xl text-white p-2 cursor-pointer'>
              <h1 className='font-semibold'>
                More
              </h1>
              <BsChevronDown fontSize={16}/>
            </div>

            <div className='flex flex-row space-x-1 items-center border rounded-xl text-white p-2 cursor-pointer'>
              <h1 className='font-semibold'>
                +
              </h1>
              <h1 className='font-semibold'>
                New Position
              </h1>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center bg-black/10 rounded-xl border space-y-2 p-4 backdrop-blur'>
          <BsInboxFill fontSize={72} className='text-white/40' />
          <h1 className='text-white/60 text-center font-semibold md:w-1/2 w-3/4'>
            Your active V3 liquidity positions will appear here.
          </h1>
          <button 
            type='button'
            onClick={() => setWallet(true)}
            className='text-lg text-white bg-[#9b174c20] hover:bg-[#9b174c70] transition ease-in-out duration-500 font-semibold rounded-xl border border-[#9b174c] backdrop-blur md:w-1/3 w-3/4 py-4 cursor-pointer'
            >
              {wallet ? "Swap coins" : "Connect Wallet"}
          </button>
        </div>
        <div className='flex flex-row items-center '>

        </div>

      </div>
    </div>
  )
}

export default Pool