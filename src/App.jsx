import React, { useState }  from 'react'
import Header from './components/header'

const App = () => {
  const [mode, setMode] = useState(false)

  const handleMode = () => {
    setMode(prevMode => !prevMode);
  }

  return (
    <div className={`w-full h-screen ${mode ? 'bg-[#171823]' : 'bg-white'}`}> 
      <Header mode={mode} handleMode={handleMode}/>
    </div>
  )
}

export default App