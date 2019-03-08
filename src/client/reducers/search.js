import { REQUEST, SUCCESS, ERROR } from '../actions';

const initialState = {
    isFetching: true,
    data: [],
    error: null
};

export default function(state = initialState, action={}) {
    const { storePath, data } = action;
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                [storePath]: {
                    isFetching: true,
                    data: null
                }
            }
        case SUCCESS:
            return {
                ...state,
                [storePath]: {
                    ...state[storePath],
                    isFetching: false,
                    data : data
                }
            }
        case ERROR:
            return {
                ...state,
                [storePath]: {
                    ...state[storePath],
                    isFetching: false,
                    data: 'error'
                }
            }
        
        default:
          return state;
    }
}