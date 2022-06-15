import React from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'

const Home = () => {
    return (
        <div className="overflow-hidden h-screen w-screen flex flex-col items-center justify-center bg-gray-900">
            <div className='pt-32 md:pt-80 lg:pt-56 flex flex-col justify-center'>
                <h1 className='font-mono text-left text-xs pl-16 text-white font-bold md:text-xl md:pl-36 lg:pl-28'>Yo soy</h1>
                <h1 className='font-mono text-center text-5xl text-white font-bold md:text-8xl'>CRISTIAN</h1>
                <h1 className='font-mono text-right pr-10 text-xs text-white font-bold md:text-2xl md:pr-28 lg:pr-20'>mid-senior</h1>
                <h1 className='font-mono text-right pr-0 text-sm text-white font-bold md:text-3xl md:pr-18 lg:pr-0'>FullStack Developer</h1>
            </div>
            <div className='pt-10 md:pt-40 lg:pt-16 flex flex-col items-center justify-center'>
                <h1 className='font-mono w-80 md:w-[45rem] lg:w-[80rem] text-xs text-white text-center md:text-lg '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                <div className='h-16 flex items-center justify-center'>
                <ChevronDoubleDownIcon className="h-8 w-8 md:h-12 md:w-12 md:pt-0 lg:h-10 lg:w-10 lg:pt-0 text-white" />
                </div>
            </div>
        </div>
    )
}

export default Home