import {GET_ALL, CREATE, UPDATE, DELETE} from '../types/book.types'

const initialState = {
	books: [],
	book: null,
}

export const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL:
			return {...state, books: action.payload}
		case CREATE:
			return {...state, books: state.books.concat([action.payload])}
		case UPDATE:
			const index = state.books.findIndex(item => item.id === action.payload.id)
			state.books.splice(index, 1, action.payload)
			return {...state, books: state.books.slice()}
		case DELETE:
			return {...state, books: state.books.filter(item => item.id !== action.payload)}
		default:
			return state
	}
}
