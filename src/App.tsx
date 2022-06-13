import { useState } from 'react'
import logo from './logo.svg'

function App() {

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-between bg-gray-900">
        <div className='h-16 px-8 flex items-center justify-between text-white py w-screen'>
          <h1 className='px-2 font-mono uppercase md:text-3xl'>Home</h1>
          <div className='flex'>
            <h1 className='px-2 font-mono uppercase md:text-3xl'>proyectos</h1>
            <h1 className='px-2 font-mono uppercase md:text-3xl'>contacto</h1>
          </div>
        </div>
        <div className=''>
          <h1 className='font-mono text-left text-xs pl-12 text-white font-bold md:text-xl'>Yo soy</h1>
          <h1 className='font-mono text-center text-5xl text-white font-bold md:text-8xl'>CRISTIAN</h1>
          <h1 className='font-mono text-right pr-8 text-xs text-white font-bold md:text-2xl'>mid-senior</h1>
          <h1 className='font-mono text-right pr-0 text-sm text-white font-bold md:text-3xl'>FullStack Developer</h1>
        </div>
        <div className='h-20 font-mono flex items-center text-white md:text-3xl'>
          <h1>Footer</h1>
        </div>
      </div>
    </>
  )
}

export default App
