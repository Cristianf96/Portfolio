import { useId } from 'react'
import { CheckCircleIcon, ChevronDoubleDownIcon } from '@heroicons/react/solid'
import { Toaster } from 'react-hot-toast'

const Home = () => {
    const id = useId()

    const skills = [
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'TYPESCRIPT',
        'NODEJS',
        'EXPRESS',
        'REACT',
        'FIREBASE',
        'MONGODB',
        'POSTGRESQL',
        'MUI',
        'TAILWIND',
    ]

    return (
        <div className="mx-auto h-[cal(100vh-144)] flex flex-col items-center justify-center bg-gray-900">
            <Toaster />
            <div className='pt-56 md:pt-96 lg:pt-72 flex flex-col justify-center'>
                <h1 className='font-mono text-left text-xs pl-16 text-white font-bold md:text-xl md:pl-36 lg:pl-28'>Yo soy</h1>
                <h1 className='font-mono text-center text-5xl text-white font-bold md:text-8xl'>CRISTIAN</h1>
                <h1 className='font-mono text-right pr-10 text-xs text-white font-bold md:text-2xl md:pr-28 lg:pr-20'>mid-senior</h1>
                <h1 className='font-mono text-right pr-0 text-sm text-white font-bold md:text-3xl md:pr-18 lg:pr-0'>FullStack Developer</h1>
            </div>
            <div className='pt-36 md:pt-96 lg:pt-80 flex flex-col items-center justify-center'>
                <h1 className='font-mono pt-5 w-80 md:w-[45rem] lg:w-[80rem] text-xs text-white text-center md:text-xl '>
                    "El deseo de conocimiento forma a un hombre ― Patrick Rothfuss, The Wise Man's Fear"
                </h1>
                <div className='h-16 w-16 flex items-center justify-center'>
                    <ChevronDoubleDownIcon className="h-8 w-8 md:h-12 md:w-12 md:pt-0 lg:h-10 lg:w-10 lg:pt-0 text-white" />
                </div>
            </div>
            <div className='mt-20 mb-20 flex flex-col items-center text-white'>
                <h1 className='uppercase font-bold pb-5 md:pb-10 md:text-2xl'>competencias</h1>
                <div className='w-80 py-5 md:w-[40rem] lg:w-[60rem] grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-2 bg-gray-800 shadow-xl justify-center rounded-lg'>
                    {skills.map((item, i) => {
                        return (
                            <div className='flex justify-center' key={i + id}>
                                <h1 className='font-mono text-xs md:text-xl'>{item}</h1>
                                <CheckCircleIcon className="h-4 w-4 ml-2 md:h-6 md:w-6 md:pt-0 lg:h-6 lg:w-6 lg:pt-0 text-white" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home