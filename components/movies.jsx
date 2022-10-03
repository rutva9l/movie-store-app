import { useState, useEffect } from "react";
import Filter from "./filter";
import MoviesList from "./moviesList";
import Heading from "./heading";
import Button from './button'
import { getMovies, getGenres } from "../moviesData";
import Link from "next/link";
import _ from 'lodash';

const Movies = () => {
    const [initData, setInitData] = useState({
        movies: [],
        genres: [],
        current: 1,
        filter: 'All genres',
        sort: { col: 'title', order: 'asc' },
        search: ""
    })

    useEffect(() => {
        setInitData({ ...initData, movies: getMovies(), genres: getGenres() })
    }, [])

    const handleChange = current => {
        setInitData({ ...initData, current });
    }
    const handleClick = (id) => {
        const movies = initData.movies.filter(movie => movie.id !== id);
        setInitData({ ...initData, movies });
    }
    const handleSelect = genre => {
        setInitData({ ...initData, filter: genre.name });
    }
    const handleSort = sort => {
        setInitData({ ...initData, sort })
    }
    const handleSearch = value => {
        setInitData({ ...initData, search: value });
    }
    const { movies: total, current, genres, filter, sort, search } = initData;
    let searched = [];
    total.map(movie => {
        const index = movie.title.toLowerCase().indexOf(search.toLowerCase());
        const genreIndex = movie.genre.toLowerCase().indexOf(search.toLowerCase());
        if (index !== -1) searched.push(movie);
        else if (genreIndex !== -1) searched.push(movie);
    })
    const filtered = filter === 'All genres' ? searched : searched.filter(m => m.genre === filter);
    const movies = _.orderBy(filtered, [sort.col], [sort.order]);
    return <div className="bg-gray-100 p-2 rounded-md">
        <Heading heading='Movies' />
        <div className="flex justify-between items-center">
            <span>There are {total.length} movies in the database. Currently showing {filtered.length} items.</span>
            <input type="text" className="px-2 py-1 bg-zinc-200 rounded-md" placeholder="Search..." onChange={e => handleSearch(e.currentTarget.value)} />
        </div>
        <div className="flex justify-between items-center">
            <Filter genres={genres} onSelect={handleSelect} selectedG={filter} />
            <Button name={<Link href="/movies/new">New Movie</Link>} />
        </div>
        <div className="mt-4">
            <MoviesList movies={movies} onClick={handleClick} onSort={handleSort} sort={sort} onSearch={handleSearch} />
        </div>
    </div>
}

export default Movies