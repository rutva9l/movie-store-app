import Link from "next/link";
import {RiMovie2Line} from 'react-icons/ri'

const Navbar = () => {
    return <nav className="bg-[#060606] w-1/5 h-full p-4">
        <div className="px-4 py-2 font-extrabold text-xl text-[#f8f8f9]">MovieStore</div>
        <div style={{ alignItems: 'center' }}>
            <div className="px-4 py-2 text-[#8b8d93] hover:bg-[#323335] hover:text-[#f8f8f9] rounded-lg">
                <Link href="/"># Movies</Link>
            </div>
            <div className="px-4 py-2 text-[#8b8d93] hover:bg-[#323335] hover:text-[#f8f8f9] rounded-lg">
                <Link href="/rentals"># Rentals</Link>
            </div>
            <div className="px-4 py-2 text-[#8b8d93] hover:bg-[#323335] hover:text-[#f8f8f9] rounded-lg">
                <Link href="/login"># Login</Link>
            </div>
            <div className="px-4 py-2 text-[#8b8d93] hover:bg-[#323335] hover:text-[#f8f8f9] rounded-lg">
                <Link href="/register"># Register</Link>
            </div>
        </div>
    </nav>
}

export default Navbar;