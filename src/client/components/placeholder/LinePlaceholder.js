import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'

class LinePlaceholder extends Component {
	render() {
        const { lebar, kunci } = this.props
		return (
            <>
                <ContentLoader 
                    height={50}
                    width={300}
                    speed={2}
                    uniquekey={`LinePlaceholder-${kunci}`}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                >
                    <rect x="10" y="10" rx="0" ry="0" width={lebar} height="20" /> 
                </ContentLoader> 
            </>  
        )
    }
}

export default LinePlaceholder