
const Navbar = () => {
    return (
        <nav className='overflow-hidden h-16 w-screen px-8 flex items-center justify-between text-white py lg:w-screen bg-gray-900'>
            <h1 className='px-2 font-mono uppercase md:text-3xl'>Inicio</h1>
            <div className='flex'>
                <h1 className='px-2 font-mono uppercase md:text-3xl'>proyectos</h1>
                <h1 className='px-2 font-mono uppercase md:text-3xl'>contacto</h1>
            </div>
        </nav>
    )
}

export default Navbar