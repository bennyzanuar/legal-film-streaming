import React, { Component } from 'react'
import MovieCard from '../partial/MovieCard'

class GenericCard extends Component {

    render(){
        const { data, title, styleClass } = this.props

        const dataItem = []
        
        for (const [index, value] of data.entries()) {
            dataItem.push(<MovieCard key={index} data={value} />)
            if (index === 3) {break}
        }
        
        return(
            <section className={`recommended-movies ${styleClass} ptb30 `}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">{title}</h3>
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

export default GenericCard