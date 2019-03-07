import React, { Component } from 'react'
import Ratings from 'react-rating'

class Rating extends Component {
    render() {
        const { average } = this.props
        return (
            <div className="rating-white mt10">
                <Ratings
                    emptySymbol={<i className="fa fa-star-o"></i>}
                    fullSymbol={<i className="fa fa-star"></i>}
                    initialRating={average/2} readonly />
                <p>{average} Rating</p>
            </div>
        )
    }
}   

export default Rating