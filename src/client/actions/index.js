import { apiVersion, apiKey } from '../configs'

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
