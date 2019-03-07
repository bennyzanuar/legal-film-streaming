import React, { Component } from 'react'
import MovieCard from '../partial/MovieCard'

class MovieList extends Component {

    render(){
        const { movies, buyMovie, purchasedMovie } = this.props
        return(
            <>
                {
                    movies.map((movie) => (
                        <MovieCard data={movie} buyMovie={buyMovie} purchasedMovie={purchasedMovie} key={movie.id} />
                    ))
                }
            </>
        )
    }
}

export default MovieList