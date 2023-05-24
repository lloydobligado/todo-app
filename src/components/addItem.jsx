import React from 'react'

const AddItem = ({mode}) => {
  return (
    <input 
        className={`absolute top-[158px] w-[540px] h-[64px] indent-6 shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ${mode ? 'shadow-black/50' : 'shadow-[#C2C3D6]/50'} rounded-md text-[#9495A5] text-[18px] leading-[18px] tracking-[-0.25px] focus:outline-none focus:border-none ${mode ? 'bg-[#25273D]' : 'bg-white' }`} 
        type="text" 
        placeholder='Create a new todo...'/>
  )
}

export default AddItem;