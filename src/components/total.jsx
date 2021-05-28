import React, { Component } from 'react';
import Movies from './movies';
import Pagination from './pagination';
import Filter from './filter';
import { getMovies, getGenres } from '../moviesList';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

class Total extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        current: 1,
        filter: 'All genres',
        sort: { col: 'title', order: 'asc' }
    }

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() })
    }
    handleChange = current => {
        this.setState({ current });
    }
    handleClick = (id) => {
        const movies = this.state.movies.filter(movie => movie.id !== id);
        this.setState({ movies });
    }
    handleSelect = genre => {
        this.setState({ filter: genre.name });
    }
    handleSort = sort => {
        this.setState({ sort })
    }
    handleSearch=value=>{
        const {movies}=this.state;
        const bruh=[];
        movies.map(movie=>{
            const index=movie.title.indexOf(value);
            if (index!==-1) bruh.push(movie);
        })
        // // console.log(movies);
        console.log(bruh);
    }

    render() {
        const { movies: total, pageSize, current, genres, filter, sort } = this.state;
        const filtered = filter === 'All genres' ? total : total.filter(m => m.genre === filter);
        const sorted = _.orderBy(filtered, [sort.col], [sort.order]);
        const movies = paginate(sorted, current, pageSize);
        return (
            <div>
                <span style={{ marginBottom: 20 }}>There are {total.length} movies in the database. Currently showing {filtered.length} items.</span>
                <div style={{ display: 'flex', marginTop: 20 }}>
                    <Filter genres={genres} onSelect={this.handleSelect} selectedG={filter} />
                    <Movies movies={movies} onClick={this.handleClick} onSort={this.handleSort} sort={sort} onSearch={this.handleSearch} />
                </div>
                <Pagination pageSize={pageSize} pageItems={filtered.length} onChange={this.handleChange} current={current} />
            </div>
        );
    }
}

export default Total;