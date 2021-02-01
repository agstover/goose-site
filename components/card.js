const Button = ({children, className = '', onClick=false, target='javascript:void(0)'}) => {
    console.log("HREF", target)
    return (
        <a href={target} className={`${className} bg-white text-accent-1 px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-200`}>{children}</a>
    )
}

const Card = ({name, location, occupation}) => {
    return (
        <div className='w-full self-stretch xl:max-w-80 px-4 p-2 flex flex-row xl:flex-col xl:w-80 text-white text-left xl:text-center bg-accent-5 shadow-lg '>
            <div className='max-w-32 xl:max-w-full'>
                <img src='/kate.jpg' className='w-full rounded-full border-white border-2 xl:border-8'/>
            </div>
            <div className='flex flex-col justify-center sm:flex-row xl:flex-col flex-1 items-baseline sm:items-center ml-4 sm:ml-0'>
                <div className='flex sm:flex-grow flex-col xl:justify-start text-xs mb-2 sm:mb-0 md:text-sm ml-0 sm:ml-8 xl:ml-0 xl:mt-4'>
                    <h1 className='text-3xl md:text-4xl font-bold'>{name}</h1>
                    <h1 className=''>{occupation}</h1>
                    <span className='hidden sm:block italic'><h1>{location}</h1></span>
                </div>
                <div className='flex justify-center xl:self-center rounded-lg text-sm' role='group'>
                    <Button className='rounded-l-lg rounded-r-lg xl:rounded-r-none px-4 py-2 mx-0 outline-none focus:shadow-outline'>Download CV</Button>
                    <Button className='rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline hidden xl:inline-block'>Contact Me</Button>
                </div>
            </div>
        </div>
    )
}

{/* <div class="flex justify-center rounded-lg text-lg mb-4" role="group">
<button class="bg-blue-500 text-white hover:bg-blue-400 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">First</button>
<button class="bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline">Second</button>
<button class="bg-blue-500 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Third</button>
</div> */}

export default Card