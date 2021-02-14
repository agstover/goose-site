const Overlay = ({isOpen, toggle}) => {

    return (
        <div
            className={`z-10 fixed inset-0 transition-opacity ${isOpen ? 'visible' : 'invisible'}`}
        >
            <div
            onClick={toggle}
            className="absolute inset-0 bg-black opacity-50"
            tabindex="0"
            ></div>
        </div>
    )
}

export default Overlay
