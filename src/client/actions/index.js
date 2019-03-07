import { apiVersion, apiKey } from '../configs'
import qs from 'qs'

export const BUYMOVIE = 'BUYMOVIE';

export const REQUEST = 'fetch/REQUEST';
export const SUCCESS = 'fetch/SUCCESS';
export const ERROR = 'fetch/ERROR';

export const fetchAPI = (storePath, endpoint, params) => async (dispatch, getState, api) => {
    let stringParams = qs.stringify(params)
    try {
        dispatch({ type: REQUEST, storePath, data : null })
        const res = await api.get(`/${apiVersion}/${endpoint}?api_key=${apiKey}&${stringParams}`)
        dispatch({ 
            type: SUCCESS, 
            storePath, 
            data : res.data
        })
    } catch (e) {
        dispatch({ 
            type: ERROR, 
            storePath,
            data : 'error bro'
        })
    }
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