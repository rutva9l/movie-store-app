import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const { genres, onSelect, selectedG } = this.props;

        return <ul className="list-group">
            {genres.map(genre =>
                <li key={genre.id} onClick={() => onSelect(genre)} className={genre.name === selectedG ? "list-group-item active" : "list-group-item"}>{genre.name}</li>)}
        </ul>
    }
}

export default Filter;