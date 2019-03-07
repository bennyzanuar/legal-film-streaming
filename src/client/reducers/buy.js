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
            // let newState = {...state};

            console.log('dari reducer bos',newState);
            return newState
        default:
            return state
    }
};