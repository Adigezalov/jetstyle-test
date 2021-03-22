import {GET_ALL, UPDATE, CREATE, DELETE} from '../types/book.types'
import {v4 as uuidv4} from 'uuid'

export function getAllBooksAction() {
	return async dispatch => {
		try {
			const response = JSON.parse(localStorage.getItem('books'))
			if (response) {
				dispatch({
					type: GET_ALL,
					payload: response,
				})
			}
		} catch (e) {
			console.log({e})
		}
	}
}

export function createBookAction(book) {
	return async dispatch => {
		try {
			book = {...book, id: uuidv4()}
			const books = JSON.parse(localStorage.getItem('books')) || []
			if (!books) localStorage.setItem('books', JSON.stringify(book))
			books.push(book)
			localStorage.setItem('books', JSON.stringify(books))
			dispatch({
				type: CREATE,
				payload: book,
			})
		} catch (e) {
			console.log({e})
		}
	}
}

export function updateBookAction(book) {
	return async dispatch => {
		try {
			const books = JSON.parse(localStorage.getItem('books'))
			const index = books.findIndex(item => item.id === book.id)
			books.splice(index, 1, book)
			localStorage.setItem('books', JSON.stringify(books))
			dispatch({
				type: UPDATE,
				payload: book,
			})
		} catch (e) {
			console.log({e})
		}
	}
}

export function deleteBookAction(id) {
	return async dispatch => {
		try {
			let books = JSON.parse(localStorage.getItem('books'))
			books = books.filter(item => item.id !== id)
			localStorage.setItem('books', JSON.stringify(books))
			dispatch({
				type: DELETE,
				payload: id,
			})
		} catch (e) {
			console.log({e})
		}
	}
}
