import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <motion.nav className='sticky top-0 mx-auto h-16 px-8 flex items-center justify-between text-white bg-gray-900 shadow-md'>
            <Link className='px-2 font-mono uppercase md:text-3xl' to={"/"}>
                Inicio
            </Link>
            <div className='flex'>
                <Link className='px-2 font-mono uppercase md:text-3xl' to={"/projects"}>
                    proyectos
                </Link>
                <Link className='px-2 font-mono uppercase md:text-3xl' to={"/contact"}>
                    contacto
                </Link>
            </div>
        </motion.nav>
    )
}

export default Navbar