import { BUYMOVIE } from '../actions'

let currentState = { idMovie : [] }
export default (state = currentState, action={}) => {
    const { movieId, isInit } = action;
    
    switch (action.type) {
        case 'BUYMOVIE':
            let newState = Object.assign({}, state);

            if(isInit){
                newState.idMovie = movieId
            }else if(movieId != null){
                if (state.idMovie == null) {
                    newState.idMovie = [movieId]
                }else {
                    newState.idMovie = newState.idMovie.concat([movieId])
                }
            }

            return newState
        default:
            return state
    }
};