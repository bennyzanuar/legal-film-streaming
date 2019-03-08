import React, { Component } from 'react'
import Cast from '../partial/Cast'
import { formatDate } from '../../helpers'

class MovieDetail extends Component {
    isNotNull(data){
        return typeof data !== 'undefined' ? data.name : '-'
    }
    render(){
        const { data } = this.props
        return(
            <aside className="widget widget-movie-details">
                <h3 className="title">Details</h3>
                <ul>
                    <li><strong>Release date: </strong>{formatDate(data.release_date)}</li>
                    <li><strong>Prod company: </strong>{this.isNotNull(data.production_companies[0])}</li>
                    <li><strong>Prod country: </strong>{this.isNotNull(data.production_countries[0])}</li>
                </ul>
            </aside>
        )
    }
}

export default MovieDetail