import Navbar from "../navbar"

const Outline = ({ component }) => {
    return (
        <div className='h-[100vh] flex'>
            <Navbar />
            <div className="w-4/5 bg-neutral-200 h-full overflow-hidden">
                <div className="px-8 py-6 bg-gray-100">Welcome!</div>
                <div className="p-4">
                    <div className="bg-gray-100 p-2 rounded-md">{component}</div>
                </div>
            </div>
        </div>
    )
}

export default Outline