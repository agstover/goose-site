const Content = ({children, className}) => {
    return (
        <div className='relative w-full self-stretch inline-block my-4 mx-4 xl:mx-0 overflow-hidden'>
            <div className='content px-8 py-8 h-full bg-white overflow-auto overflow-x-hidden shadow-lg xl:shadow-none scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 scrollbar-thumb-rounded'>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Content

/* 

padding: 0;
    position: absolute;
    overflow: hidden;
    left: 560px;
    right: 0;
    top: 15px;
    bottom: 15px;
    width: auto;
    height: auto;

*/