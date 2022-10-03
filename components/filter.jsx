const Filter = ({ genres, onSelect, selectedG }) => {
    return <div className="flex">
        {genres.map(genre =>
            <div key={genre.id} onClick={() => onSelect(genre)} className={genre.name == selectedG ? "filter-active px-2 py-1 cursor-pointer" : "px-2 py-1 cursor-pointer"} >{genre.name}</div>)}
    </div>
}

export default Filter;