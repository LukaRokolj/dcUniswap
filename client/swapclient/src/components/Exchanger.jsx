import React, {useState} from 'react';
import { FiSettings } from 'react-icons/fi';
import { FaEthereum } from 'react-icons/fa';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiBitcoin, BiGasPump } from 'react-icons/bi';
import Wallets from './Wallets';


const Input = ({placeholder, name, type, value, handleChange, styling}) => (
	// <div className="flex flex-col space-y-1">
	<input 
      id={name}
	  placeholder={0.0}
      type={type}
      step="0.01"
      onChange={(e) => handleChange(e, name)}
      className='w-3/5 bg-transparent p-2 text-white/20 text-lg'/>		
	// </div>
);

const { ethereum } = window;

const Exchanger = ({wallet, setWallet}) => {
  const [clan, setClan] = useState()

  const [more, setMore] = useState(false)


	const handleChange = (e, name) => {
		setClan((prevState) => ({...prevState, [name]: e.target.value }));
		console.log(clan);
	}

	const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask!");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            
			alert(accounts[0]);
            //setConnectedAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object.");
        }
    }


  return (
    <div className='flex flex-col justify-center items-center pt-24 pb-8'>
			<div className='bg-black/30 backdrop-blur-lg rounded-2xl border md:w-2/5 w-11/12 flex flex-col p-4 space-y-2'>
				<div className='flex flex-row justify-between items-center'>
					<h1 className='text-white text-xl'>
						Swap
					</h1>
					<FiSettings fontSize={20} className='text-white'/>
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex flex-row justify-between items-center w-full p-4 bg-black/10 border backdrop-blur rounded-xl '>
						<Input placeholder="Ime" name="ime" type="number" value={0.0} handleChange={handleChange}/>
						<div className='flex flex-row justify-between items-center space-x-2 cursor-pointer border backdrop-blur rounded-lg p-4'>
							<FaEthereum className='text-white/40'/>
							<h1 className='text-white/40'>
									ETH
							</h1>
							<BsChevronDown className='text-white/40'/>
						</div>
					</div>
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex flex-row justify-between items-center w-full p-4 bg-black/10 border backdrop-blur rounded-xl'>
						<Input placeholder="Ime" name="ime" type="number" value={0.0} handleChange={handleChange}/>
						<div className='flex flex-row justify-between items-center space-x-2 cursor-pointer border backdrop-blur rounded-lg p-4'>
							<BiBitcoin className='text-white/40'/>
							<h1 className='text-white/40'>
									WBTC
							</h1>
							<BsChevronDown className='text-white/40'/>
						</div>
					</div>
				</div>
				<div className='flex flex-row w-full justify-between items-center'>
					<div className='flex flex-row items-center space-x-2'>
						<AiOutlineInfoCircle className='text-white'/>
						<h1 className='text-white text-sm'>
							1 WBTC = 14.42 ETH
						</h1>
					</div>
					<div className='flex flex-row items-center space-x-2'>
						<div className='flex flex-row items-center space-x-2 backdrop-blur border p-1 rounded'>
							<BiGasPump className='text-white'/>
							<h1 className='text-white text-sm'>
								$2.36
							</h1>
						</div>
						{!more ?
							<BsChevronDown className='text-white'onClick={() => setMore(true)}/>
							:
							<BsChevronUp className='text-white' onClick={() => setMore(false)}/>
						}
					</div>
				</div>
				{more && (
					<div className='flex flex-col w-full border border-white/70 rounded-xl p-2'>
						<div className='flex flex-row justify-between items-center'>
							<h1 className='text-white text-sm'>
								Expected Output
							</h1>
							<h1 className='text-white text-sm'>
								0.06917358 WBTC
							</h1>
						</div>
						<div className='flex flex-row justify-between border-b border-gray-700 pb-1 items-center'>
							<h1 className='text-white text-sm'>
								Price Impact
							</h1>
							<h1 className='text-white text-sm'>
								0.00%
							</h1>
						</div>
						<div className='flex flex-row justify-between mt-1 items-center'>
							<h1 className='text-gray-500 font-light text-sm'>
								Minimum received after slippage (0.50%)
							</h1>
							<h1 className='text-gray-500 font-light text-end text-sm'>
								0.0688317 WBTC
							</h1>
						</div>
						<div className='flex flex-row justify-between items-center'>
							<h1 className='text-gray-500 font-light text-sm'>
								Network Fee
							</h1>
							<h1 className='text-gray-500 font-light text-sm'>
								~$2.68
							</h1>
						</div>

					</div>
				)}
				<button 
					type='button'
					onClick={() => connectWallet()}
					className='text-lg text-white bg-[#9b174c20] hover:bg-[#9b174c70] transition ease-in-out duration-500 font-semibold rounded-xl border border-[#9b174c] backdrop-blur w-full py-4 cursor-pointer'
					>
						{wallet ? "Swap coins" : "Connect Wallet"}
				</button>
			</div>
    </div>
  )
}

export default Exchanger