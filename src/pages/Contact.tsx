import { useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const validateEmail = (email: string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
    };

    const onSubmit = async () => {
        if (name === '' || email === '' || message === '') return toast.error('Rellene todos los campos obligatorios')

        const flag = validateEmail(email)
        if (!flag) return toast.error('Correo electronico erroneo')

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        await emailjs.send('service_zo4kks8', 'template_g78qz0c', templateParams, import.meta.env.VITE_EMAILJS_PUBLICKEY)
            .then((result) => {
                console.log(result.text);
                toast.success('Mensaje enviado')
            }, (error) => {
                console.log(error.text);
            });

        clearInput()
    }

    const clearInput = () => {
        setName('')
        setEmail('')
        setMessage('')
        navigate('/')
    }

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-900">
            <Toaster />
            <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-10 lg:max-w-6xl text-white item justify-center'>
                <div className='flex flex-col space-y-8 justify-between'>
                    <div>
                        <h1 className='font-mono font-bold text-4xl md:text-5xl tracking-wide'>Contactame</h1>
                        <p className='pt-2 text-gray-100 text-sm md:text-lg'>
                            Si tienes alguna idea y quieres que haga parte, puedes contactarme.
                        </p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div className='inline-flex space-x-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className='md:text-xl'>(+ 57) 311 297 4183</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className='md:text-xl'>cb961218@gmail.com</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className='md:text-xl'>Colombia</span>
                        </div>
                    </div>
                    <div className='flex space-x-4 text-lg'>
                        <a href="https://github.com/Cristianf96" target={'_blank'}>
                            <svg fill="white" className="w-5 h-5 md:w-8 md:h-8" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/cristian-barragan-ab9149225/" target={'_blank'}>
                            <svg className="w-5 h-5 md:w-8 md:h-8" fill='white' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 310 310">
                                <g id="XMLID_801_">
                                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 bg-gray-800 rounded-xl shadow-lg p-8 md:w-[70rem] lg:w-[40rem]'>
                    <div>
                        <label htmlFor='' className='text-sm md:text-lg'>Nombre</label>
                    </div>
                    <div>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Nombre' className='ring-1 bg-gray-700 ring-gray-700 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-400 text-white' />
                    </div>
                    <div>
                        <label htmlFor='' className='text-sm md:text-lg'>Correo electronico</label>
                    </div>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Correo electronico' className='ring-1 bg-gray-700 ring-gray-700 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-400 text-white' />
                    </div>
                    <div>
                        <label htmlFor='' className='text-sm md:text-lg'>Mensaje</label>
                    </div>
                    <div>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder='Mensaje' className='ring-1 bg-gray-700 ring-gray-700 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-400 text-white' />
                    </div>
                    <button onClick={onSubmit} className='inline-block self-end bg-gray-600 text-white font-bold rounded-lg px-4 py-2 uppercase text-sm md:text-base'>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact