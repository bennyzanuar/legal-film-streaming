import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'

class DetailIntroPlaceholder extends Component {
	render() {  
		return (
            <>
                <ContentLoader 
                    height={450}
                    width={300}
                    speed={2}
                    uniquekey={'DetailIntroImagePlaceholder'}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                >
                    <rect x="10" y="10" rx="0" ry="0" width="300" height="450" />
                </ContentLoader> 
            </>  
        )
    }
}

export default DetailIntroPlaceholder