import { useState, useEffect } from "react"
import Heading from "./common/heading"
import Button from "./common/button"
import Input from "./common/input"
import { updateMovies } from "../moviesData"
import Link from "next/link"

const Form = () => {
    const [data, setData] = useState({
        newMovie: { title: "", genre: "", rating: "", release: "" }
    })

    const handleChange = ({ currentTarget }) => {
        const newMovie = { ...data.newMovie }
        newMovie[currentTarget.name] = currentTarget.value;
        setData({ ...data, newMovie });
    }

    const handleSubmit=e=>{
        e.preventDefault();
        updateMovies(data.newMovie);
    }

    return <div className="rounded-md p-2 bg-gray-100">
        <Heading heading='Add Movie +' />
        <form action="" onSubmit={handleSubmit} className="mt-2">
            <div  className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Input id='title' title='Title' type='text' onChange={handleChange} value={data.newMovie.title} />
                <Input id='genre' title='Genre' type='text' onChange={handleChange} value={data.newMovie.genre} />
                <Input id='rating' title='IMDb Rating' type='text' onChange={handleChange} value={data.newMovie.rating} />
                <Input id='release' title='Release Date' type='text' onChange={handleChange} value={data.newMovie.release} />
            </div>
            <Button name={<Link href="/">Add</Link>} type="submit" />
        </form>
    </div>
}

export default Form