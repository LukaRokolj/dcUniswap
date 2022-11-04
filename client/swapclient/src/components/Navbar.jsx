import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../images/logo.png';
import { FaEthereum } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import metamask from '../images/metamask.png';

const Navbar = ({wallet, setWallet, setVisible}) => {
  
	const [navState, setNavState] = useState('swap');
	
  return (
    <div className='w-full flex md:flex-row flex-col md:h-fit h-[100vh] justify-between items-center absolute top-0 py-2'>
        <div className='flex flex-row md:w-1/3 w-full justify-evenly space-x-2'>
            <h1 className={`text-lg font-semibold text-white/90 cursor-pointer`} onClick={() => window.location = '/'}>
                Swap
            </h1>
            <h1 className={`text-lg font-semibold text-white/90 cursor-pointer`} onClick={() => window.location = '/tokens'}>
               Tokens
            </h1>
            <h1 className={`text-lg font-semibold text-white/90 cursor-pointer`} onClick={() => window.location = '/pool'}>
                Pool
            </h1>
        </div>
        <div className='flex flex-row justify-evenly w-1/4 space-x-2'>
						<div className='flex flex-row justify-between items-center space-x-2 cursor-pointer bg-[#9b174c40] border border-[#9b174c] rounded-xl p-4' onClick={() => setVisible(true)}>
							<FaEthereum className='text-white' />
							<h1 className='text-white'>
									ETH
							</h1>
							<BsChevronDown className='text-white' />
						</div>
            <button className='bg-[#9b174c40] hover:bg-[#9b174c90] text-white transition ease-in-out duration-500 p-4 rounded-xl border border-[#9b174c] cursor-pointer'
                onClick={() => setWallet(true)}
            >
                <h1>
                        {!wallet ? 
                            (
                                <div className='w-full flex flex-row items-center space-x-2 justify-between'>
                                    <h1 className='text-lg font-semibold'>
                                        Metamask
                                    </h1>
                                    <img src={metamask} alt="Metamask logo" className='w-4' />
                                </div>
                            ) : 
                            "Connect Wallet"
                        }
                </h1>
            </button>
            
            
        </div>
    </div>
  )
}

export default Navbar