import React, { Component } from 'react'
import MovieList from '../box/MovieList'
import Navbar from '../partial/Navbar'
import BigTitle from '../partial/BigTitle'
import Footer from '../partial/Footer'
import Pagination from '../partial/Pagination'
import HomePlaceholder from '../box/HomePlaceholder'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAPI, buyMovie } from '../../actions'
import { imageConf } from '../../configs'

import qs from 'qs'

const STORE_PATH_NP = 'NOW_PLAYING'
const endpoint_np = 'movie/now_playing'

let params = {
    language: 'id-ID',
    region: 'id',
    page: 1
}

class Home extends Component {
    constructor(props){
        super(props)
    }
    static fetchData(store, match, page) {
        params.page = page
        return store.dispatch(fetchAPI(STORE_PATH_NP, endpoint_np, params))
	}
    getPurchasedMovie(){
        let purchased_movie = localStorage.getItem('purchased_movie')
        purchased_movie = JSON.parse(purchased_movie)
        this.props.buyMovie(purchased_movie, true)
    }
    componentDidMount() {
        let querystring = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        let page = querystring.page
        params.page = page ? page : 1
        this.props.fetchAPI(STORE_PATH_NP, endpoint_np, params)
        
        localStorage.setItem('current_money', '100000');
        this.getPurchasedMovie()
	}
    
    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            let querystring = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
            let page = querystring.page
            params.page = page
            this.props.fetchAPI(STORE_PATH_NP, endpoint_np, params)
        }
    }
    render() {
        const { now_playing, purchased_movie } = this.props

        // console.log('now_playing? ',now_playing);
        let page = params.page
        return(
            <>
                <div className="wrapper">
                    <Navbar />
                    <section className="latest-releases bg-light ptb100">
                        <BigTitle />
                        <div className="container">
                            <div className="row">
                                { typeof now_playing == 'undefined' || now_playing.isFetching == true && 
                                    <HomePlaceholder count='8' />
                                }
                                { typeof now_playing != 'undefined' && now_playing.isFetching == false &&
                                    <MovieList movies={now_playing.data.results} buyMovie={this.props.buyMovie} purchasedMovie={purchased_movie}/>
                                }
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    { typeof now_playing == 'undefined' || now_playing.isFetching == true && <div>Lagi Loading Bosku</div> }
                                    { typeof now_playing != 'undefined' && now_playing.isFetching == false && 
                                        <Pagination page={page} total_page={now_playing.data.total_pages} />
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return { 
        now_playing : state.search[STORE_PATH_NP], 
        purchased_movie : state.buy.idMovie
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        { fetchAPI, buyMovie }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);