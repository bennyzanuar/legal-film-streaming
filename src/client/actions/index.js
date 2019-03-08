import { apiVersion, apiKey } from '../configs'
import qs from 'qs'

export const BUYMOVIE = 'BUYMOVIE';
export const AMOUNT = 'AMOUNT';

export const REQUEST = 'fetch/REQUEST';
export const SUCCESS = 'fetch/SUCCESS';
export const ERROR = 'fetch/ERROR';

export const fetchAPI = (storePath, endpoint, params) => (dispatch, getState, api) => {
    let stringParams = qs.stringify(params)
    dispatch({ type: REQUEST, storePath, data : null })
    api.get(`/${apiVersion}/${endpoint}?api_key=${apiKey}&${stringParams}`)
    .then((res) => {
        dispatch({ 
            type: SUCCESS, 
            storePath, 
            data : res.data
        })
    }).catch(err => {
        dispatch({ 
            type: ERROR, 
            storePath,
            data : 'error bro'
        })
    })
        
    
}

export const buyMovie = (id, initialLoad) => {
    const purchased_movie = localStorage.getItem('purchased_movie')
    const isInit = initialLoad ? initialLoad : false;
    
    if (!purchased_movie) {
        if (id != null || typeof id !== 'undefined') {
            let ids = id != null ? [id] : []
            localStorage.setItem('purchased_movie', JSON.stringify(ids))
        }
    }
    else {
        if (id != null || typeof id !== 'undefined') {
            let ids = JSON.parse(purchased_movie)
            if(!isInit){
                ids.push(id)
            }
            localStorage.setItem('purchased_movie', JSON.stringify(ids));
        }
    }
    
    return {
            type: BUYMOVIE, 
            movieId: id,
            isInit: isInit
        }
}


export const saldo = (amount) => {
    let default_amount = 100000
    const current_money = localStorage.getItem('current_money')
    if (!current_money) {
        localStorage.setItem('current_money', default_amount);
        amount = default_amount
    }else {
        if(typeof amount == 'undefined'){
            amount = current_money
        }else{
            amount = amount
        }
        localStorage.setItem('current_money', amount);
    }
    return {
        type: AMOUNT, 
        amount: amount
    }
}