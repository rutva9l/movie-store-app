import Navbar from "../navbar"

const Outline = ({component}) => {
    return (
        <div className='h-[100vh] flex'>
            <Navbar />
            <div className="w-4/5 bg-neutral-200 h-full overflow-hidden">
                <div className="px-8 py-6 bg-gray-100">sup</div>
                <div className="p-4">{component}</div>
            </div>
        </div>
    )
}

export default Outline