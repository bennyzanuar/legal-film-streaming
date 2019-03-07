import React, { Component } from 'react'

class Overview extends Component {

    render(){
        const { data } = this.props
        return(
            <div className="col-lg-8 col-sm-12">
                <div className="inner pr50">
                    <div className="storyline">
                        <h3 className="title">Storyline</h3>
                        <p>{data}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview