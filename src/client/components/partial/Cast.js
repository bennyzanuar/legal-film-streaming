import React, { Component } from 'react'
import ImageHelper from './ImageHelper'

class Cast extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="celebrity-grid-1">
                    <div className="celeb-container">
                        <div className="celebrity-image">
                            <a href="#">
                                <ImageHelper src={`${data.profile_path}`} title={data.original_title} w='185' />
                            </a>
                        </div>
                        <div className="celebrity-content">
                            <div className="inner">
                                <h6 className="title">
                                    <a href="celebrity-detail.html">{data.name}</a>
                                </h6>
                                <p>{data.character}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   

export default Cast