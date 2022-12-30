import React from 'react'
import { BsPeople } from 'react-icons/bs'
import { MdEmojiPeople,MdAttachMoney} from 'react-icons/md'
import { FaBox } from 'react-icons/fa'

const Counts = () => {  
return (
    <div className='flex justify-between items-center flex-col lg:flex-row'>
        <div className='flex justify-between items-center  bg-white border rounded-2xl p-4 w-full lg:m-2 my-2'>
           <div >
            <BsPeople className='w-20 h-20 text-primary'></BsPeople>
           </div>
           <div>
           <p className='text-primary font-bold text-xl text-right'>24053</p>
            <p className='text-right'>Total Customer</p>
           </div>
        </div>
        <div className='flex justify-between items-center  bg-white border rounded-2xl p-4 w-full lg:m-2 my-2'>
           <div >
            <MdEmojiPeople className='w-20 h-20 text-primary'></MdEmojiPeople>
           </div>
           <div>
           <p className='text-primary font-bold text-xl text-right'>2405323</p>
            <p className='text-right'>Total Visitor</p>
           </div>
        </div>
        <div className='flex justify-between items-center  bg-white border rounded-2xl p-4 w-full lg:m-2 my-2'>
           <div >
            <FaBox className='w-20 h-20 text-primary'></FaBox>
           </div>
           <div>
           <p className='text-primary font-bold text-xl text-right'>14032</p>
            <p className='text-right'>Total Order</p>
           </div>
        </div>
        <div className='flex justify-between items-center  bg-white border rounded-2xl p-4 w-full lg:m-2 my-2'>
           <div >
            <MdAttachMoney className='w-20 h-20 text-primary'></MdAttachMoney>
           </div>
           <div>
           <p className='text-primary font-bold text-xl text-right'>$53924</p>
            <p className='text-right'>Total Revenue</p>
           </div>
        </div>
    </div>
  )
}

export default Counts