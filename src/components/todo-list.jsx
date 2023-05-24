import React from 'react'
import TodoListFooter from './todo-list-footer'

const TodoList = ({mode}) => {
  return (
    <div className={`w-[540px] h-[439px] absolute top-[246px] rounded-md ${mode ? 'bg-[#25273D]' : 'bg-white' } shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ${mode ? 'shadow-black/50' : 'shadow-[#C2C3D6]/50'}`}>
      <TodoListFooter mode={mode}/>
    </div>
  )
}

export default TodoList