import React from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'

const Home = () => {
    return (
        <div className="h-[calc(100vh-144px)] flex flex-col items-center justify-center bg-gray-900">
            <div className='h-[100rem] flex flex-col justify-center'>
                <h1 className='font-mono text-left text-xs pl-16 text-white font-bold md:text-xl md:pl-36 lg:pl-28'>Yo soy</h1>
                <h1 className='font-mono text-center text-5xl text-white font-bold md:text-8xl'>CRISTIAN</h1>
                <h1 className='font-mono text-right pr-10 text-xs text-white font-bold md:text-2xl md:pr-28 lg:pr-20'>mid-senior</h1>
                <h1 className='font-mono text-right pr-0 text-sm text-white font-bold md:text-3xl md:pr-18 lg:pr-0'>FullStack Developer</h1>
            </div>
            <div className=''>
                <ChevronDoubleDownIcon className="h-6 w-6 pt-1 md:h-14 md:w-14 md:pt-0 lg:h-12 lg:w-12 lg:pt-0 text-white" />
            </div>
        </div>
    )
}

export default Home