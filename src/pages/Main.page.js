import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createBookAction, deleteBookAction, getAllBooksAction, updateBookAction} from '../redux/actions/book.actions'
import NewBookComponent from '../components/NewBook.component'
import LibraryComponent from '../components/Library.component'

const MainPage = () => {
	const dispatch = useDispatch()
	const [book, setBook] = useState({name: null, author: null, cover: null})
	const books = useSelector(s => s.book.books)
	const [imagePreview, setImagePreview] = useState(null)
	const [disableEditBook, setDisableEditBook] = useState(false)
	const [removedBook, setRemovedBook] = useState(null)

	useEffect(() => {
		dispatch(getAllBooksAction())
	}, [])

	useEffect(() => setDisableEditBook(!book.author || !book.name), [book])

	useEffect(() => resetBookData(), [books])

	const updateBook = () => dispatch(updateBookAction(book))

	const createBook = () => dispatch(createBookAction(book))

	const deleteBook = id => dispatch(deleteBookAction(id))

	const editBook = event => {
		event.preventDefault()
		book.id ? updateBook() : createBook()
	}

	const setBookData = event => setBook({...book, [event.target.name]: event.target.value})

	const resetBookData = () => {
		setBook({name: null, author: null, cover: null})
		setImagePreview(null)
		setRemovedBook(null)
	}

	const setImage = event => {
		const fr = new FileReader()
		fr.onload = () => {
			setBook({...book, cover: fr.result})
		}
		fr.readAsDataURL(event.target.files[0])
		setImagePreview(URL.createObjectURL(event.target.files[0]))
	}

	const resetImage = () => {
		setBook({...book, cover: null})
		setImagePreview(null)
	}

	const selectToUpdate = book => {
		setBook(book)
		setImagePreview(book.cover)
	}

	const selectToDelete = id => setRemovedBook(id)

	return (
		<div style={{display: 'flex', flexDirection: 'row', minHeight: '100%'}}>
			<LibraryComponent books={books} selectToUpdate={selectToUpdate} deleteBook={deleteBook} />
			<NewBookComponent
				imagePreview={imagePreview}
				setImage={setImage}
				book={book}
				setBookData={setBookData}
				editBook={editBook}
				resetImage={resetImage}
				disableEditBook={disableEditBook}
				resetBookData={resetBookData}
			/>
		</div>
	)
}

export default MainPage
