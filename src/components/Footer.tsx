import moment from 'moment'

const Footer = () => {
    const date = moment().format('YYYY')
    return (
        <footer className="mx-auto h-20 font-mono flex items-center justify-center text-white md:text-2xl lg:text-xl bg-gray-900">
            <div className='flex flex-col items-center justify-center'>
                <div className="grid grid-flow-col gap-4 mb-5 uppercase">
                    &copy; {date} - <a href="https://cristian-developer.vercel.app/" target="_blank" rel="noopener noreferrer">Cristian Developer</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer