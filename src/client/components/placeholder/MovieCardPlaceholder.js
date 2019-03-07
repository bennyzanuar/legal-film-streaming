import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'

class MovieCardPlaceholder extends Component {
	render() {  
		return (
            <div>
                <ContentLoader 
                    height={450}
                    width={255}
                    speed={2}
                    uniquekey={'MovieCardPlaceholder'}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                >
                    <rect x="10" y="10" rx="0" ry="0" width="230" height="290" /> 
					
                    <rect x="10" y="310" rx="4" ry="4" width="230" height="12" /> 
                    <rect x="10" y="330" rx="4" ry="4" width="180" height="12" /> 
                    <rect x="10" y="350" rx="4" ry="4" width="200" height="12" /> 
                </ContentLoader> 
            </div>  
        )
    }
}

export default MovieCardPlaceholder