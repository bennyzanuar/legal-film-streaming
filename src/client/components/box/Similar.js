import React, { Component } from 'react'
import MovieCard from '../partial/MovieCard'

class Similar extends Component {

    render(){
        const { data } = this.props

        const dataItem = []
        
        for (const [index, value] of data.entries()) {
            dataItem.push(<MovieCard key={index} data={value} />)
            if (index === 3) {break}
        }
        
        return(
            <section className="recommended-movies bg-light ptb30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">Similar</h3>
                        </div>
                    </div>
                    <div className="row">
                        {dataItem}
                    </div>
                </div>
            </section>
        )
    }
}

export default Similar