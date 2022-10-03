import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';
import Input from './../common/input';
import { updateMovies } from './../moviesList';
import {Link} from 'react-router-dom';

class NewMovie extends Form {
    state = {
        data: { title: "", genre: "", rating: "", release: "" },
        errors: {},
        newMovie: { title: "", genre: "", rating: "", release: "" }
    }
    schema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        rating: Joi.number().min(0).max(10).required().label("IMDb Rating"),
        release: Joi.number().required().label("Release Date")
    }
    handleChange = ({ currentTarget }) => {
        const errors = { ...this.state.errors }
        const message = this.validateProp(currentTarget);
        if (message) errors[currentTarget.name] = message;
        else delete errors[currentTarget.name];

        const newMovie = { ...this.state.newMovie }
        newMovie[currentTarget.name] = currentTarget.value;

        const data = { ...this.state.data };
        data[currentTarget.name] = currentTarget.value;
        this.setState({ data, errors, newMovie });
    }
    handleSubmit=e=>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        errors === null ? console.log('submitted') : console.log(errors);
        updateMovies(this.state.newMovie);
    }
    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="title" label="Title" value={data.title} error={errors.title} type="text" onChange={this.handleChange} />
                    <Input name="genre" label="Genre" value={data.genre} error={errors.genre} type="text" onChange={this.handleChange} />
                    <Input name="rating" label="IMDb Rating" value={data.rating} error={errors.rating} type="text" onChange={this.handleChange} />
                    <Input name="release" label="Release Date" value={data.release} error={errors.release} type="text" onChange={this.handleChange} />
                    <button disabled={this.validate()} style={{ marginTop: 20 }} className="btn btn-primary"><Link style={{color:'white',textDecoration:'none'}} to="/movies">Save</Link></button>
                </form>
            </div>
        );
    }
}

export default NewMovie;