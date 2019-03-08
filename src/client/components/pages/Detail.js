import React, { Component } from 'react'
import MovieList from '../box/MovieList'
import MDIntro from '../box/MovieDetailIntro'
import MDBox from '../box/MovieDetail'
import Overview from '../box/Overview'
import CastList from '../box/CastList'
import GenericCard from '../box/GenericCard'

import MDIPlaceholder from '../box/MDIPlaceholder'

import Meta from '../partial/Meta'
import Navbar from '../partial/Navbar'
import Footer from '../partial/Footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAPI, buyMovie, saldo } from '../../actions'
import { getIdMovie } from '../../helpers'

const STORE_PATH_DETAIL = 'DETAIL_MOVIE'
let endpoint_detail = 'movie/'

const STORE_PATH_POPULAR = 'POPULAR_MOVIE'
let endpoint_popular = 'movie/popular'

let params = {
    language: 'id-ID',
    append_to_response: 'credits,recommendations,similar'
}

class Detail extends Component {
    constructor(props){
        super(props)
    }
    static fetchData(store, match) {
        let idMovie = getIdMovie(match.params.idnslug)
        let endpoint_detail = `movie/${idMovie}`
        store.dispatch(fetchAPI(STORE_PATH_POPULAR, endpoint_popular, {}))
        return store.dispatch(fetchAPI(STORE_PATH_DETAIL, endpoint_detail, params))
	}
    getPurchasedMovie(){
        let purchased_movie = localStorage.getItem('purchased_movie')
        purchased_movie = JSON.parse(purchased_movie)
        this.props.buyMovie(purchased_movie, true)
    }
    getSaldo(){
        this.props.saldo()
    }
    componentDidMount() {
        let idMovie = getIdMovie(this.props.match.params.idnslug)
        let endpoint_detail = `movie/${idMovie}`
        this.props.fetchAPI(STORE_PATH_DETAIL, endpoint_detail, params)
        this.props.fetchAPI(STORE_PATH_POPULAR, endpoint_popular, {})
        
        this.getPurchasedMovie()
        this.getSaldo()
	}
    componentDidUpdate(prevProps) {
        if (this.props.match.params.idnslug !== prevProps.match.params.idnslug) {
            let idMovie = getIdMovie(this.props.match.params.idnslug)
            let endpoint_detail = `movie/${idMovie}`
            this.props.fetchAPI(STORE_PATH_DETAIL, endpoint_detail, params)
        }
    }
    render() {
        const { detail_movie, purchased_movie, current_money, popular } = this.props
        return(
            <>
                <div className="wrapper">
                    <Navbar current_money={current_money} />
                    <section className="movie-detail-intro overlay-gradient ptb100"></section>
                    { typeof detail_movie == 'undefined' || detail_movie.isFetching == true && <MDIPlaceholder /> }
                    { typeof detail_movie != 'undefined' && detail_movie.isFetching == false && 
                        <>
                            <Meta data={detail_movie} />
                            <MDIntro 
                                data={detail_movie.data} 
                                buyMovie={this.props.buyMovie} 
                                purchasedMovie={purchased_movie}
                                saldo={this.props.saldo} 
                                currentMoney={current_money}
                             />
                            <section className="movie-detail-main ptb100">
                                <div className="container">
                                    <div className="row">
                                        <Overview data={detail_movie.data.overview} />
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="sidebar">
                                                <MDBox data={detail_movie.data} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <CastList data={detail_movie.data} />
                            <GenericCard styleClass="bg-light" title="Recommendation" data={detail_movie.data.recommendations.results} />
                            { typeof popular == 'undefined' || popular.isFetching == true && <div>Loading ......</div> }
                            { typeof popular != 'undefined' && popular.isFetching == false && 
                                <GenericCard styleClass="bg-light2" title="Popular" data={popular.data.results} />
                            }
                            <GenericCard styleClass="bg-light" title="Similar" data={detail_movie.data.similar.results} />
                        </>
                    }
                    <Footer />
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return { 
        popular : state.search[STORE_PATH_POPULAR],
        detail_movie : state.search[STORE_PATH_DETAIL],
        purchased_movie : state.buy.idMovie,
        current_money : state.amount
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        { fetchAPI, buyMovie, saldo }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);