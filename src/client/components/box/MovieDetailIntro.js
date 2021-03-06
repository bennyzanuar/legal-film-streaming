import React, { Component } from 'react'
import { toast } from 'react-toastify'
import ImageHelper from '../partial/ImageHelper'
import Rating from '../partial/Rating'
import { parseGenre, formatCurrency, formatDate, getPrice } from '../../helpers'

class MovieDetailIntro extends Component {
    constructor(props) {
        super(props);
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
            <section className="movie-detail-intro2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="movie-poster">
                                <ImageHelper src={data.poster_path} alt={data.title} w='300' styleClass='mposter-detail' />
                            </div>
                            <div className="movie-details">
                                <>
                                    {
                                        uniqPurchasedMovie.map((purchased, index) => {
                                            if(purchased == data.id){
                                                return (<p key={`purchased-${data.id}`} className="title-purchased">Purchased</p>)
                                            }
                                        })
                                    }
                                </>
                                <h3 className="title">{data.title}</h3>
                                <ul className="movie-subtext">
                                    <li>{data.runtime + " Minutes" }</li>
                                    <li>{parseGenre(data.genres)}</li>
                                    <li>{formatDate(data.release_date)}</li>
                                </ul>
                                <p>{formatCurrency(getPrice(data.vote_average))}</p>
                                <button onClick={ (e) => {this.buy(data.id, getPrice(data.vote_average))} } className="btn btn-main btn-effect">Buy</button>&nbsp;
                                <Rating average={data.vote_average} />
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}   

export default MovieDetailIntro