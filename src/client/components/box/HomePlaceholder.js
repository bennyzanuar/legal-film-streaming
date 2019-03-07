import React, { Component } from 'react'
import MovieCardPlaceholder from '../placeholder/MovieCardPlaceholder'

class HomePlaceholder extends Component {
    render() {
        const { count } = this.props
        
        const placeholder = []

        for (let i=0; i < count; i++ ) {
            placeholder.push(
                <div key={`placeholder-card-movie-${i}`} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="movie-box-2 bg-placeholder mb30">
                        <MovieCardPlaceholder />
                    </div>
                </div>
            )
        }

        return (
            <>
                {placeholder}
            </>
        )
    }
}   

export default HomePlaceholder