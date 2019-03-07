import React, { Component } from 'react'
import Cast from '../partial/Cast'
import { formatDate } from '../../helpers'

class MovieDetail extends Component {

    render(){
        const { data } = this.props
        return(
            <aside className="widget widget-movie-details">
                <h3 className="title">Details</h3>
                <ul>
                    <li><strong>Release date: </strong>{formatDate(data.release_date)}</li>
                    <li><strong>Prod company: </strong>{data.production_companies[0].name}</li>
                    <li><strong>Prod country: </strong>{data.production_countries[0].name}</li>
                </ul>
            </aside>
        )
    }
}

export default MovieDetail