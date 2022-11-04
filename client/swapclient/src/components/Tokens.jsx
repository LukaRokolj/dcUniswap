import React, { useState } from 'react';
import Popup from './Popup';
import { FaEthereum } from 'react-icons/fa';
import { BsChevronDown, BsArrowDown, BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import eth from '../images/eth.png';
import graph from '../images/graph.png';

const Input = ({placeholder, name, type, value, handleChange, styling}) => (
	// <div className="flex flex-col space-y-1">
	<input 
      id={name}
	  placeholder={placeholder}
      type={type}
      step="0.01"
      onChange={(e) => handleChange(e, name)}
      className='bg-transparent text-white/80'/>		
	// </div>
);


const Tokens = () => {
    const [clan, setClan] = useState();
    const [network, setNetwork] = useState(false);
    const [popup, setPopup] = useState(false);

    const handleChange = (e, name) => {
		setClan((prevState) => ({...prevState, [name]: e.target.value }));
		console.log(clan);
	}
  return (
    <div className='flex flex-col justify-center items-center pt-24 pb-8'>
        <div className='md:w-3/4 w-11/12 flex flex-col space-y-4'>
            <h1 className='text-white text-5xl'>
                Top tokens
            </h1>
            <div className='w-full flex md:flex-row flex-col md:items-center md:space-x-2 md:space-y-0 space-y-2'>
                <div className='flex flex-row items-center space-x-2'>
                    <div className='flex flex-row justify-between items-center space-x-2 cursor-pointer bg-[#9b174c40] border border-[#9b174c] rounded-xl px-4 py-2'
                    onClick={() => {
                        setNetwork(true);
                        setPopup(true);
                    }}>
                        <FaEthereum className='text-white' />
                        <h1 className='text-white'>
                                ETH
                        </h1>
                        <BsChevronDown className='text-white' />
                    </div>
                    <div className='flex flex-row justify-between items-center space-x-2 cursor-pointer bg-[#9b174c40] border border-[#9b174c] rounded-xl px-4 py-2'
                        onClick={() => {
                            setNetwork(false);
                            setPopup(true);
                        }}>
                        <h1 className='text-white'>
                                1D
                        </h1>
                        <BsChevronDown className='text-white' />
                    </div>
                </div>
                <div className='flex flex-row items-center bg-[#9b174c40] border border-[#9b174c] backdrop-blur rounded-xl p-2 space-x-2 '>
						<CiSearch fontSize={20} className='text-white/40'/>
                        <Input placeholder="Search tokens" name="token" type="text" value={0.0} handleChange={handleChange}/>
					</div>
            </div>
            <div className='flex flex-col border border-[#9b174c] overflow-y-auto h-80 backdrop-blur rounded-xl space-y-2 p-4'>
                <div className='flex flex-row items-center space-x-4'>
                    <div className='text-white/80 md:flex hidden w-1/12'>
                        #
                    </div>
                    <div className='text-white/80 md:w-3/12 w-3/4 '>
                        Token name
                    </div>
                    <div className='text-white/80 md:w-2/12 w-1/4'>
                        Price
                    </div>
                    <div className='text-white/80 md:flex hidden w-1/12 '>
                        Change
                    </div>
                    <div className='md:flex hidden flex-row items-center text-white/80 w-1/12 space-x-1'>
                        <h1>
                            TVL
                        </h1>
                        <AiOutlineInfoCircle />
                    </div>
                    <div className='md:flex hidden flex-row justify-center items-center text-white/80 w-2/12 space-x-1'>
                        <BsArrowDown />
                        <h1>
                            Volume
                        </h1>
                        <AiOutlineInfoCircle />
                    </div>
                </div>
                
                <div className='flex flex-row items-center space-x-4'>
                    <div className='md:flex hidden text-white/40 w-1/12'>
                        1
                    </div>
                    <div className='text-white/80 md:w-3/12 w-3/4 flex flex-row items-center space-x-2 '>
                    <img src={eth} alt='' className='w-6'/>
                    <h1 className='text-white/40'>
                        Ethereum
                    </h1>
                    <h1 className='text-white/20'>
                        ETH
                    </h1>
                </div>
                    <div className='text-white/80 md:w-2/12 w-1/4'>
                        $1,328.57
                    </div>
                    <div className='md:flex hidden flex flex-row items-center text-white/80 w-1/12 '>
                        <h1>
                            +1.39%
                        </h1>
                        <BsArrowUpRight className='text-green-300' />
                    </div>
                    <div className='md:flex hidden text-white/80 text-center w-1/12'>
                        $859.79M
                    </div>
                    <div className='md:flex hidden justify-center text-white/80 text-center w-2/12'>
                        $252.86M
                    </div>
                </div>
            </div>
        </div>
        {popup && <Popup network={network} setVisible={setPopup}/>}
    </div>
  )
}

export default Tokens

