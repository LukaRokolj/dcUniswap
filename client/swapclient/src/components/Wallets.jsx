import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import metamask from '../images/metamask.png';
import coinbase from '../images/coinbase.png';
import walletconnect from '../images/walletconnect.png'

const Wallets = ({setWallet}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-black/10 h-[100vh] w-full backdrop-blur absolute z-20 top-0'>
        <div className='flex flex-col p-2 bg-black/30 border backdrop-blur rounded-xl space-y-2 md:w-2/5 w-11/12'>
            <div className='w-full flex flex-row items-center justify-between'>
                <h1 className='text-white text-lg'>
                    Connect a wallet
                </h1>
                <AiOutlineClose fontSize={18} className='font-bold text-white hover:text-xl transition ease-in-out duration-750 cursor-pointer' onClick={() => setWallet(false)}/>
            </div>
            <div className='w-full flex flex-row items-center p-4 border border hover:bg-white/20 transition ease-in-out duration-750 rounded-xl justify-between'>
                <h1 className='text-white text-lg font-semibold'>
                    Metamask
                </h1>
                <img src={metamask} alt="Metamask logo" className='w-12' />
            </div>
            <div className='w-full flex flex-row items-center p-4 border border hover:bg-white/20 transition ease-in-out duration-750 rounded-xl justify-between'>
                <h1 className='text-white text-lg font-semibold'>
                    Coinbase
                </h1>
                <img src={coinbase} alt="Metamask logo" className='w-12 rounded-full' />
            </div>
            <div className='w-full flex flex-row items-center p-4 border border hover:bg-white/20 transition ease-in-out duration-750 rounded-xl justify-between'>
                <h1 className='text-white text-lg font-semibold'>
                    WalletConnect
                </h1>
                <img src={walletconnect} alt="Metamask logo" className='w-12' />
            </div>
            <div className='flex p-2 bg-white/05 border rounded-xl'>
                <h1 className='text-white text-sm'>
                    By connecting a wallet, you agree to Braincity Labs’ <span className='underline text-blue-500'>Terms of Service</span> and acknowledge that you have read and understand the <span className='underline text-blue-500'>DCSwap Protocol Disclaimer</span>.
                </h1>

            </div>

        </div>
    </div>
  )
}

export default Wallets