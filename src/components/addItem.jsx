import React from 'react'

const AddItem = ({mode, newItem, setNewItem, handleEnter}) => {

  return (
    <input 
        className={`absolute top-[158px] md:w-[540px] w-[327px]  md:h-[64px] h-[48px] indent-6 shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ${mode ? 'shadow-black/50' : 'shadow-[#C2C3D6]/50'} rounded-md text-[#9495A5] text-[18px] leading-[18px] tracking-[-0.25px] focus:outline-none focus:border-none ${mode ? 'bg-[#25273D]' : 'bg-white' }`} 
        type="text" 
        placeholder='Create a new todo...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        onKeyDown={() => handleEnter()} />
  )
}

export default AddItem;