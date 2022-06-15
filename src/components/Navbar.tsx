
const Navbar = () => {
    return (
        <nav className='h-16 px-8 flex items-center justify-between text-white py w-screen bg-gray-900'>
            <h1 className='px-2 font-mono uppercase md:text-3xl'>Inicio</h1>
            <div className='flex'>
                <h1 className='px-2 font-mono uppercase md:text-3xl'>proyectos</h1>
                <h1 className='px-2 font-mono uppercase md:text-3xl'>contacto</h1>
            </div>
        </nav>
    )
}

export default Navbar