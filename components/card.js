const Button = ({children, className = '', onClick=false, target=''}) => {
    return (
        <a className={`${className} bg-white font-bold text-accent-1 px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-200`}>{children}</a>
    )
}

const Card = ({name, location, occupation}) => {
    return (
        <div className='w-full self-stretch xl:max-w-80 px-12 p-2 xl:p-4 flex flex-row xl:flex-col xl:w-80 text-white text-left xl:text-center bg-accent-5 shadow-lg '>
            <img src='/kate.jpg' className='max-w-32 xl:max-w-7xl rounded-full border-white border-8'/>
            <div className='flex flex-grow flex-col justify-center ml-8 xl:ml-0 xl:mt-4'>
                <h1 className='text-4xl'>{name}</h1>
                <h1 className=''>{occupation}</h1>
                <h1>{location}</h1>
            </div>
            <div className='flex flex-row justify-between align-middle py-2'>
                <Button className='self-center'>Download CV</Button>
                <Button className='hidden xl:inline-block'>Contact Me</Button>
            </div>
        </div>
    )
}

export default Card