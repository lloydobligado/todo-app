import React, { useState } from 'react'
import Status from '../utils/todo-status'

  const TodoListFooter = ({mode}) => {
  const [status, setStatus] = useState('')

  const handleStatus = (statusName) => {
    setStatus(statusName);
  }

  const statusMenu = Status.map(statu => {
    const isActive = statu.name === status;
    return (
      <li className={`font-bold text-[14px] leading-[14px] ${isActive ? 'text-[#3A7CFD]' : 'text-[#9495A5] hover:text-[#494C6B]'} tracking-[-0.194444px] cursor-pointer`} 
          onClick={() => handleStatus(statu.name)}
          key={statu.name}
      >
          {statu.name}
      </li>
    )
  })
  
  return (
    <div className={`absolute bottom-0 flex h-[50px] w-full justify-between items-center border-t-[2px] border-solid ${mode ? 'border-[#393A4B]' : 'border-[#E3E4F1]'}`}>
        <h6 className='text-[14px] leading-[14px] text-[#9495A5] hover:text-[#494C6B] tracking-[-0.194444px] pl-[25px] cursor-pointer'>5 items left</h6>
        <ul className='flex justify-between items-center w-[166px] h-[18px]'>
            { statusMenu }
        </ul>
        <h6 className='text-[14px] leading-[14px] text-[#9495A5] hover:text-[#494C6B] tracking-[-0.194444px] pr-[25px] cursor-pointer'>Clear Completed</h6>
    </div>
  )
}

export default TodoListFooter