const Button = ({children, className = '', onClick=false, target='javascript:void(0)'}) => {
    console.log("HREF", target)
    return (
        <a href={target} className={`${className} bg-white text-accent-1 px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-200`}>{children}</a>
    )
}

const Card = ({name, location, occupation}) => {
    return (
        <div className='relative w-full inline-block'>
            <div className='bg-hero bg-cover bg-center h-full'>
            </div>
            <div className='absolute bottom-0 right-0 left-0'>
                    <h1 className='text-9xl'>Kate Acharte</h1>
                    <h1>Landscape Design</h1>
                </div>
            {/* <div className='max-w-32 xl:max-w-full'>
                <img src='/kate.jpg' className='w-full rounded-full border-white border-2 xl:border-8'/>
            </div> */}

        </div>
    )
}

{/* <div class="flex justify-center rounded-lg text-lg mb-4" role="group">
<button class="bg-blue-500 text-white hover:bg-blue-400 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">First</button>
<button class="bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline">Second</button>
<button class="bg-blue-500 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Third</button>
</div> */}

export default Card