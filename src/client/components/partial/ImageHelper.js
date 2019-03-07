import React, { Component } from 'react'
import ProgressiveImage from 'react-progressive-image'

class ImageHelper extends Component {
    render() {
        const { src, title, w, styleClass } = this.props
        const base_image_url = `https://image.tmdb.org/t/p/`
        const small_size = `w45`
        const high_size = w > 0 ? `w${w}` :`w500`
        const classNames = styleClass ? styleClass : ''
        
        let tiny_image = `${base_image_url}${small_size}${src}`
        let large_image = `${base_image_url}${high_size}${src}`
        
        return (
            <>
                <ProgressiveImage src={large_image} placeholder={tiny_image}>
                    {src => <img src={src} alt={title} className={classNames} onError={(e)=>{e.target.onerror = null; e.target.src="/images/image-default.png"}} />}
                </ProgressiveImage>
            </>
        )
    }
}   

export default ImageHelper