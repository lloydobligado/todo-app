import React, { useState } from 'react'
import LightModeImage from '../assets/images/mountain-light.jpg'
import DarkModeImage from '../assets/images/mountain-night2.jpg'
import LightMode from '../assets/icons/lightmode.svg'
import DarkMode from '../assets/icons/darkmode.svg'
import AddItem from './addItem'
import TodoList from './todo-list'
import Footer from './footer'

const Header = ({mode, handleMode}) => {
  const [newItem, setNewItem] = useState("")
  const [frmDatas, setFrmDatas] = useState([])

  // const handleChange = () => {
  //   // if (event.key === 'Enter') {
  //     console.log(formData)
  //   // }
  // }

  const handleEnter = () => {
    if (event.key === 'Enter') {

      if (!newItem) {
        alert("please enter details.")
        return
      }

      const formData = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
      }

      setFrmDatas(prevFrmDatas => [...prevFrmDatas, formData])
      setNewItem("")

      // console.log(frmDatas)
    }
  }

  return (
    <div className='relative '>
        <div className='relative'>
          <img className='h-[300px] w-full object-none object-center' src={mode ? DarkModeImage : LightModeImage} alt="mountain" />
          <div className={`absolute inset-0 bg-gradient-to-r ${mode ? 'from-[#3710BD] to-[#A42395]' : 'from-[#5596FF] to-[#AC2DEB]'}  opacity-75`}></div>
        </div>
        <div className={`h-[500px] w-full flex flex-col items-center ${mode ? 'bg-[#171823]' : 'bg-white' }`}>
          <div className='flex absolute top-[70px] w-[542px] h-[48px] justify-between items-center'>
            <h1 className='text-white font-bold text-4xl leading-10 tracking-[15px]'>TODO</h1>
            <img className='cursor-pointer h-[26px] w-[26px]' src={mode ? LightMode : DarkMode } onClick={handleMode} alt="mode" />
          </div>

          <AddItem mode={mode} newItem={newItem} setNewItem={setNewItem} handleEnter={handleEnter}/>
          
          <TodoList mode={mode} frmDatas={frmDatas} setFrmDatas={setFrmDatas} />
          <Footer mode={mode} />
        </div>
    </div>

    
  )
}

export default Header