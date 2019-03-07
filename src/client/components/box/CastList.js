import React, { Component } from 'react'
import Cast from '../partial/Cast'

class CastList extends Component {

    render(){
        const { cast } = this.props.data.credits

        const castItem = []

        for (const [index, value] of cast.entries()) {
            castItem.push(<Cast key={index} data={value} />)
            if (index === 5) {break}
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="title">Top Cast</h3>
                    </div>
                </div>
                <div className="row">
                    {castItem}
                </div>
            </div>
        )
    }
}

export default CastList