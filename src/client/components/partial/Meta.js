import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Meta extends Component {
    render() {
        const { data } = this.props.data
        let meta = data
        if (!meta) {
            
            meta = {
                title : 'Legal Film Streaming',
                overview : 'legal film app with react redux server side rendering'
            }
        }
        return (
            <Helmet>
                <title>{meta.title}s</title>
                <meta name="description" content={meta.overview} itemprop="description"/>
                <meta name="keywords" content itemprop={`tokopedia, legal film, react, redux, express, nodejs, server side rendering, ${meta.title}`} />
            </Helmet>
        )
    }
}   

export default Meta