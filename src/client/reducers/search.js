import { REQUEST, SUCCESS, ERROR } from '../actions';

export default function(state = { }, action={}) {
    const { storePath, data } = action;

    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                [storePath]: {
                    ...state[storePath],
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