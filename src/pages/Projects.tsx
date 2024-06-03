import { motion } from 'framer-motion'
import moment from 'moment'

import distrito from '../assets/distrito.png'
import OAE from '../assets/O&E.png'

const Projects = () => {

    const projects = [
        {
            date: 'Abril 4,2022',
            title: 'Distrito recicla',
            description: 'Plataforma para la obtencion de información de los procesos de recoleccion de materiales reciclables y no reciclabes.',
            linkGitHub: 'https://github.com/Cristianf96/degree_project2',
            linkSite: 'https://distrito-recicla.vercel.app/',
            image: `${distrito}`,
            delay: 0.75
        },
        {
            date: 'Noviembre 17,2021',
            title: 'Order And Eat Now Portal',
            description: 'Plataforma que a través de un programa de diseño moderno y sencillo, prioriza y optimiza los pedidos y los diferentes procesos para los interesados como Restaurantes, Hoteles, etc.',
            linkCompany: 'https://whitesoft.com.au/',
            linkSite: 'https://portal.orderandeatnow.com.au/',
            image: `${OAE}`,
            delay: 1
        },
        {
            date: 'Noviembre 17,2021',
            title: 'Order And Eat Now Web app',
            description: 'Plataforma que te permite hacer la busqueda de tu establecimiento favorito y hacer tus pedidos ya sean dentro de un restaurante, reservaciones de hotel o incluso reservar un auto para tu viaje.',
            linkCompany: 'https://whitesoft.com.au/',
            linkSite: 'https://app.orderandeatnow.com.au/',
            image: `${OAE}`,
            delay: 1.25
        }
    ]

    const calcularEdad = () => {
        let cumpleanos = moment('1996-12-18').format('YYYY-MM-DD');
        const edad = moment().diff(cumpleanos, 'years', false);
        return edad;
    }

    const calcularExperiencia = () => {
        let cumpleanos = moment('2020-01-01').format('YYYY-MM-DD');
        const edad = moment().diff(cumpleanos, 'years', false);
        return edad;
    }

    return (
        <section className="h-full md:h-[cal(100vh-144)] flex items-center justify-center bg-gray-900">
            <div className='container px-5 py-24 mx-auto'>
                <div className='text-center mb-12'>
                    <motion.h5 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.25 } }} className='font-mono mb-1 text-2xl text-white font-bold md:text-3xl uppercase'>Proyectos</motion.h5>
                    <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.50 } }} className="leading-relaxed text-gray-200 mt-5">
                        Con {calcularEdad()} años y {calcularExperiencia()} años de experiencia como desarrollador tanto backend como frontend, y con las ganas de aprender cada dia mas, he tenido la oportunidad de desarrollar individual como en equipo diferentes plataformas que me permitieron pulir mis competencias ademas de no solo trabajar a nivel nacional sino tambien internacional.
                    </motion.p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects && projects.map((item) => {
                        return (
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1.25, delay: item.delay } }} className="p-4 sm:w-1/2 lg:w-1/3">
                                <div className="h-full border-1 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-64 md:h-44 w-full object-cover object-center" src={item.image} alt="blog" />
                                    <div className="p-6 bg-gray-800 hover:text-white transition duration-300 ease-in">
                                        <h2 className="text-base font-medium text-gray-300 mb-1">{item.date}</h2>
                                        <h1 className="text-2xl text-gray-200 font-mono mb-3">{item.title}</h1>
                                        <p className="leading-relaxed text-gray-200 mb-3">{item.description}</p>
                                        <div className="flex items-center flex-wrap justify-between">
                                            {item.linkGitHub && (
                                                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}  className="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0" href={item.linkGitHub} target={'_blank'}>GitHub
                                                    <svg fill="white" className="w-4 h-4 ml-2" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                                                    </svg>
                                                </motion.a>
                                            )}
                                            {item.linkCompany && (
                                                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}   className="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0" href={item.linkCompany} target={'_blank'}>Compañia
                                                    <svg fill="white" className="w-4 h-4 ml-2" width="512px" height="512px" viewBox="0 0 512 512" id="_x30_1" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667  c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146  z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034  C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187  h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306  c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50  H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414  C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404  c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514  H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667  c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z   M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593  C381.469,407.717,366.807,418.738,351.021,427.514z" />
                                                    </svg>
                                                </motion.a>
                                            )}
                                            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}   className="text-blue-300 inline-flex items-center md:mb-2 lg:mb-0" href={item.linkSite} target={'_blank'}>Sitio
                                                <svg fill="white" className="w-4 h-4 ml-2" width="512px" height="512px" viewBox="0 0 512 512" id="_x30_1" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667  c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146  z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034  C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187  h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306  c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50  H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414  C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404  c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514  H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667  c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z   M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593  C381.469,407.717,366.807,418.738,351.021,427.514z" />
                                                </svg>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects