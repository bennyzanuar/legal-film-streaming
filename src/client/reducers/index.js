import { combineReducers } from 'redux'
import search from './search'
import amount from './amount'
import buy from './buy'

export default combineReducers({
    buy: buy,
    amount: amount,
    search: search
})

