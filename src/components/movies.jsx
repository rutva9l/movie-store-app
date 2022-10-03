import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {
    raiseSort = col => {
        const sort = { ...this.props.sort };
        if (sort.col === col) sort.order = sort.order === 'asc' ? 'desc' : 'asc'
        else {
            sort.col = col;
            sort.order = 'asc';
        }
        this.props.onSort(sort);
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <Link to="/movies/new" style={{ color: 'white', textDecoration: 'none' }}>
                    <button className="btn btn-primary">New Movie</button>
                </Link>
                <div>
                    <input type="text" placeholder="Search..." onChange={e=>this.props.onChange(e.currentTarget.value)} style={{width:'100%',marginTop:20,padding:5}} />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={() => this.raiseSort('title')} style={{ padding: 20, cursor: 'pointer' }}>Title</th>
                            <th onClick={() => this.raiseSort('genre.name')} style={{ padding: 20, cursor: 'pointer' }}>Genre</th>
                            <th onClick={() => this.raiseSort('rating')} style={{ padding: 20, cursor: 'pointer' }}>IMDb</th>
                            <th onClick={() => this.raiseSort('release')} style={{ padding: 20, cursor: 'pointer' }}>Release Date</th>
                            <th style={{ padding: 20 }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map(movie =>
                            <tr key={movie.id}>
                                <td style={{ padding: 20 }}>{movie.title}</td>
                                <td style={{ padding: 20 }}>{movie.genre}</td>
                                <td style={{ padding: 20 }}>{movie.rating}</td>
                                <td style={{ padding: 20 }}>{movie.release}</td>
                                <td style={{ padding: 20 }}><button className="btn btn-danger btn-sm" style={{color: 'white'}} onClick={() => this.props.onClick(movie.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movies;