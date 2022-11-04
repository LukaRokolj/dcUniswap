import React  from 'react';
import { BsCheck2 } from 'react-icons/bs';
import eth from '../images/eth.png';

const Popup = ({ network, setVisible }) => {
    
    return (
        <div className='flex flex-col justify-center items-center bg-black/10 h-[100vh] w-full backdrop-blur absolute z-20 top-0'>
            <div className='flex flex-col p-4 bg-black/30 border backdrop-blur rounded-xl space-y-4 md:w-2/5 w-11/12'>
                {network ? 
                    (
                    <>
                        <div className='flex flex-row justify-between items-center pr-4 cursor-pointer hover:scale-105 transition ease-in-out duration-500' onClick={() => setVisible(false)}>
                            <div className='flex flex-row items-center space-x-2 '>
                                <img src={eth} alt="" className='w-1/6'/>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    Ethereum
                                </h1>
                            </div>
                            <BsCheck2 fontSize={24} className='text-[#9b174c]'/>
                        </div>
                        <div className='flex flex-row justify-between items-center pr-4'>
                            <div className='flex flex-row items-center space-x-2 '>
                                <img src={eth} alt="" className='w-1/6'/>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    Ethereum
                                </h1>
                            </div>
                            {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                        </div>
                        <div className='flex flex-row justify-between items-center pr-4'>
                            <div className='flex flex-row items-center space-x-2 '>
                                <img src={eth} alt="" className='w-1/6'/>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    Ethereum
                                </h1>
                            </div>
                            {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                        </div>
                        <div className='flex flex-row justify-between items-center pr-4'>
                            <div className='flex flex-row items-center space-x-2 '>
                                <img src={eth} alt="" className='w-1/6'/>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    Ethereum
                                </h1>
                            </div>
                            {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                        </div>
                        <div className='flex flex-row justify-between items-center pr-4'>
                            <div className='flex flex-row items-center space-x-2 '>
                                <img src={eth} alt="" className='w-1/6'/>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    Ethereum
                                </h1>
                            </div>
                            {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                        </div>
                    </>
                    ):
                    (
                        <>
                            <div className='flex flex-row justify-between items-center pr-4 cursor-pointer hover:scale-105 transition ease-in-out duration-500' onClick={() => setVisible(false)}>
                                    <h1 className='text-white/80 text-xl font-bold'>
                                        1H
                                    </h1>
                                <BsCheck2 fontSize={24} className='text-[#9b174c]'/>
                            </div>
                            <div className='flex flex-row justify-between items-center pr-4'>
                                
                                    
                                    <h1 className='text-white/80 text-xl font-bold'>
                                        1D
                                    </h1>
                                
                                {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                            </div>
                            <div className='flex flex-row justify-between items-center pr-4'>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    1W
                                </h1>
                                {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                            </div>
                            <div className='flex flex-row justify-between items-center pr-4'>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    1M
                                </h1>
                                {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                            </div>
                            <div className='flex flex-row justify-between items-center pr-4'>
                                <h1 className='text-white/80 text-xl font-bold'>
                                    1Y
                                </h1>
                                {/* <BsCheck2 fontSize={24} className='text-[#9b174c]'/> */}
                            </div>
                        </>
                    )
                    }   
            </div>
        </div>
      )
}

export default Popup