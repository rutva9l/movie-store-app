const movies = [
    {
        id: "1",
        title: "10 things I hate about you",
        genre: 'Romcom',
        rating: "7.3/10",
        release: "1999"
    },
    {
        id: "2",
        title: "Lilo & Stitch",
        genre: 'Comedy',
        rating: "7.2/10",
        release: "2002"
    },
    {
        id: "3",
        title: "Gone Girl",
        genre: 'Thriller',
        rating: "8.1/10",
        release: "2014"
    },
    {
        id: "4",
        title: "Despicable Me",
        genre:'Comedy',
        rating: "7.6/10",
        release: "2010"
    },
    {
        id: "5",
        title: "Jennifer's Body",
        genre: 'Thriller',
        rating: "5.3/10",
        release: "2009"
    },
    {
        id: "6",
        title: "A Simple Favor",
        genre: 'Drama',
        rating: "6.8/10",
        release: "2018"
    },
    {
        id: "7",
        title: "Inception",
        genre: 'Thriller',
        rating: "8.8/10",
        release: "2010"
    },
    {
        id: "8",
        title: "Imitation Game",
        genre: 'Thriller',
        rating: "8/10",
        release: "2014"
    },
    {
        id: "9",
        title: "Clueless",
        genre: 'Drama',
        rating: "6.8/10",
        release: "1995"
    },
    {
        id: "10",
        title: "The Proposal",
        genre: 'Romcom',
        rating: "6.7/10",
        release: "2009"
    }
]

const genres = [{
        name: 'All genres',
        id: '1'
    },
    {
        name:'Comedy',
        id:'2'
    }, 
    {
        name:'Thriller',
        id:'3'
    }, 
    {
        name:'Romcom',
        id:'4'
    }, 
    {
        name:'Drama',
        id:'5'
    }
];
export function updateMovies(newMovie){
    movies.push(newMovie);
    console.log(movies);
}
export function getMovies() {
    return movies;
}
export function getMovie(id) {
    return movies.find(m => m.id === id);
}
export function getGenres() {
    return genres;
}