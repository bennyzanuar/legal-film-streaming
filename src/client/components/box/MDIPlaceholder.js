import React, { Component } from 'react'
import DetailIntroPlaceholder from '../placeholder/DetailIntroPlaceholder'
import LinePlaceholder from '../placeholder/LinePlaceholder'

class MDIPlaceholder extends Component {
    render() {
        return (
            <section className="movie-detail-intro2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w300">
                                <DetailIntroPlaceholder />
                            </div>
                            <div className="movie-details">
                                <h3 className="w300line"><LinePlaceholder kunci="1" lebar="280" /></h3>
                                <ul className="w300line">
                                    <li><LinePlaceholder kunci="2" lebar="180" /></li>
                                    <li><LinePlaceholder kunci="3" lebar="200" /></li>
                                    <li><LinePlaceholder kunci="4" lebar="130" /></li>
                                </ul>
                                <p></p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}   

export default MDIPlaceholder