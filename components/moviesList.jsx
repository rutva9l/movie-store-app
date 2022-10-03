import { MdOutlineCancel, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const MoviesList = ({ sort, onSort, raiseSort, movies, onClick }) => {
    raiseSort = col => {
        if (sort.col === col) sort.order = sort.order === 'asc' ? 'desc' : 'asc'
        else {
            sort.col = col;
            sort.order = 'asc';
        }
        onSort(sort);
    }

    return <div className='w-full'>
        <table className='w-full h-1/2 overflow-hidden'>
            <thead>
                <tr>
                    <th className="px-8 pb-4 cursor-pointer text-left font-normal" onClick={() => raiseSort('title')}><span className="inline">Title</span> <MdOutlineKeyboardArrowDown className="inline" /></th>
                    <th className="px-8 pb-4 cursor-pointer text-left font-normal" onClick={() => raiseSort('genre.name')}><span className="inline">Genre</span> <MdOutlineKeyboardArrowDown className="inline" /></th>
                    <th className="px-8 pb-4 cursor-pointer text-left font-normal" onClick={() => raiseSort('rating')}><span className="inline">IMDb</span> <MdOutlineKeyboardArrowDown className="inline" /></th>
                    <th className="px-8 pb-4 cursor-pointer text-left font-normal" onClick={() => raiseSort('release')}><span className="inline">Release Date</span> <MdOutlineKeyboardArrowDown className="inline" /></th>
                    <th className="px-8 pb-4"></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie =>
                    <tr className="hover:bg-[#eaeaea]" key={movie.id}>
                        <td className="px-8 py-4 rounded-l-xl">{movie.title}</td>
                        <td className="px-8 py-4">{movie.genre}</td>
                        <td className="px-8 py-4">{movie.rating}</td>
                        <td className="px-8 py-4">{movie.release}</td>
                        <td className="px-8 py-4 rounded-r-xl"><button onClick={() => onClick(movie.id)}><MdOutlineCancel /></button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default MoviesList