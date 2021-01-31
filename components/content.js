const Content = ({children, className}) => {
    return (
        
            <div className='px-4 pt-4 h-full bg-white overflow-auto overflow-x-hidden shadow-lg xl:shadow-none'>
            {children}
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