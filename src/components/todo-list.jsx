import React from 'react'
import TodoListFooter from './todo-list-footer'
import DeleteButton from '../assets/icons/deleteButton.svg'
// import CheckboxButton from './checkbox'

const TodoList = ({mode, frmDatas, setFrmDatas, handleChange}) => {

  const handleDelete = (id) => {
    const deleteTask = frmDatas.filter((task) => task.id !== id);
    setFrmDatas(deleteTask);
  }
  return (
    <div className={`w-[540px] h-[439px] absolute top-[246px] rounded-md ${mode ? 'bg-[#25273D]' : 'bg-white' } shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ${mode ? 'shadow-black/50' : 'shadow-[#C2C3D6]/50'}`}>
      <form>
        <div className='w-full h-[389px] overflow-y-auto'>
        {
          frmDatas.map(frmData => {
            return (
              <div key={frmData.id} className={`relative flex items-center w-full h-[65px]  border-b-[2px] border-solid ${mode ? 'border-[#393A4B]' : 'border-[#E3E4F1]'}`}>
                <input className='ml-[24px] mr-[24px] cursor-pointer'
                      type='checkbox'
                      id='isChecked'
                      // checked={}
                      name='isChecked'
                      onChange={handleChange} />
                <label className={`text-[18px] leading-[18px] tracking-[-0.25px] ${mode ? 'text-[#C8CBE7]' : 'text-[#494C6B]'} cursor-pointer`} 
                       htmlFor='isChecked'
                >
                      {frmData.value}
                </label>
                <img className='absolute right-0 mr-[24px] w-[18px] h-[18px] cursor-pointer' 
                     src={DeleteButton} 
                     alt="Remove"
                     onClick={() => handleDelete(frmData.id)} />
              </div>
            )
          })
        }
        </div>
        <TodoListFooter mode={mode}/>
      </form>
    </div>

  )
}

export default TodoList