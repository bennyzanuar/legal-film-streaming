import { AMOUNT } from '../actions'

export default (state = {}, action={}) => {
    const { amount } = action;
    
    switch (action.type) {
        case 'AMOUNT':
            return {
                ...state,
                amount : amount
            }
        default:
            return state
    }
};