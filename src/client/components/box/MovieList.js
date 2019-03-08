import React, { Component } from 'react'
import MovieCard from '../partial/MovieCard'

class MovieList extends Component {

    render(){
        const { movies, buyMovie, purchasedMovie, saldo, currentMoney } = this.props
        return(
            <>
                {
                    movies.map((movie) => (
                        <MovieCard 
                            data={movie} 
                            buyMovie={buyMovie} 
                            purchasedMovie={purchasedMovie} 
                            saldo={saldo} 
                            currentMoney={currentMoney}
                            key={movie.id} />
                    ))
                }
            </>
        )
    }
}

export default MovieList