import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ImageHelper from './ImageHelper'
import { formatCurrency, getPrice } from '../../helpers'
import Rating from '../partial/Rating'
import { toast } from 'react-toastify'

import { slug } from '../../helpers'

class MovieCard extends Component {
    constructor(props) {
        super(props)
    }
    buy(id, price) {
        const { buyMovie, saldo, currentMoney } = this.props
        let money = currentMoney.amount - price

        if (currentMoney.amount < price) {
            toast.error("Maaf saldo anda tidak mencukupi untuk melakukan pembelian ini", {
                position: toast.POSITION.TOP_LEFT
            });
        }else {
            buyMovie(id, false)
            saldo(money)
        }
    }
    render() {
        const { data, purchasedMovie } = this.props
        let uniqPurchasedMovie = [...new Set(purchasedMovie)]

        return (
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="movie-box-2 mb30">
                    <div className="listing-container">
                        <div className="listing-image">
                            <div className="play-btn">
                                <a href="#" className="play-video">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                            <div className="buttons">
                                <a href="#" data-original-title="Rate" data-toggle="tooltip" data-placement="bottom" className="like">
                                {
                                    uniqPurchasedMovie.map((purchased, index) => {
                                        if(purchased == data.id){
                                            return (<p key={`purchased-${data.id}`} className="title-purchased">Purchased</p>)
                                        }
                                    })
                                }
                                </a>
                            </div>
                            <div className="stars">
                                <Rating average={data.vote_average} />
                            </div>
                            <ImageHelper src={`${data.poster_path}`} title={data.original_title} />
                        </div>
                        <div className="listing-content">
                            <div className="inner">
                                <h6 className="title">{data.original_title}</h6>
                                <p>{formatCurrency(getPrice(data.vote_average))}</p>
                                <button onClick={ (e) => {this.buy(data.id, getPrice(data.vote_average))} } className="btn btn-main btn-effect">Buy</button>&nbsp;
                                <Link to={`/${slug(data.id, data.original_title)}`} className="btn btn-success btn-effect">Detail</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   

export default MovieCard