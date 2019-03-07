import React, { Component } from 'react'
import MovieList from '../box/MovieList'

import MDIntro from '../box/MovieDetailIntro'
import MDBox from '../box/MovieDetail'
import Overview from '../box/Overview'
import CastList from '../box/CastList'
import Recommendation from '../box/Recommendation'
import Similar from '../box/Similar'

import Navbar from '../partial/Navbar'
import Footer from '../partial/Footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAPI, buyMovie } from '../../actions'
import { getIdMovie } from '../../helpers'

const STORE_PATH_DETAIL = 'DETAIL_MOVIE'
let endpoint_detail = 'movie/'

const params = {
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
        return store.dispatch(fetchAPI(STORE_PATH_DETAIL, endpoint_detail, params))
	}
    getPurchasedMovie(){
        let purchased_movie = localStorage.getItem('purchased_movie')
        purchased_movie = JSON.parse(purchased_movie)
        this.props.buyMovie(purchased_movie, true)
    }
    componentDidMount() {
        let idMovie = getIdMovie(this.props.match.params.idnslug)
        let endpoint_detail = `movie/${idMovie}`
        this.props.fetchAPI(STORE_PATH_DETAIL, endpoint_detail, params)
        
        localStorage.setItem('current_money', '100000');
        this.getPurchasedMovie()
	}
    componentDidUpdate(prevProps) {
        if (this.props.match.params.idnslug !== prevProps.match.params.idnslug) {
            let idMovie = getIdMovie(this.props.match.params.idnslug)
            let endpoint_detail = `movie/${idMovie}`
            this.props.fetchAPI(STORE_PATH_DETAIL, endpoint_detail, params)
        }
    }
    render() {
        const { detail_movie, purchased_movie } = this.props
        
        return(
            <>
                <div className="wrapper">
                    <Navbar />
                    <section className="movie-detail-intro overlay-gradient ptb100" style={ { backgroundImage: `url("/images/other/breadcrumb.jpg?1")` } }></section>
                    { typeof detail_movie == 'undefined' || detail_movie.isFetching == true && <div>Lagi Loading Bosku</div> }
                    { typeof detail_movie != 'undefined' && detail_movie.isFetching == false && 
                        <>
                            <MDIntro data={detail_movie.data} buyMovie={this.props.buyMovie} purchasedMovie={purchased_movie} />
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
                            <Recommendation data={detail_movie.data.recommendations.results} />
                            <Similar data={detail_movie.data.similar.results} />
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
        detail_movie : state.search[STORE_PATH_DETAIL],
        purchased_movie : state.buy.idMovie
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        { fetchAPI, buyMovie }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);