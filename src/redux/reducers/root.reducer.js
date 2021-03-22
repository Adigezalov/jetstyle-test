import {combineReducers} from 'redux'
import {bookReducer} from './book.reducer'

export const rootReducer = combineReducers({
	book: bookReducer,
})
