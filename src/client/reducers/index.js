import { combineReducers } from 'redux'
// import latestReducer from './latest'
import search from './search'
import buy from './buy'

export default combineReducers({
    buy: buy,
    search: search
})

