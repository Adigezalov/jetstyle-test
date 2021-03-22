import React from 'react'
import colors from '../constants/colors'
import size from '../constants/size'
import ContainerComponent from './Container.component'
import BookCartComponent from './BookCart.component'

const LibraryComponent = props => {
	const {books, selectToUpdate, deleteBook} = props

	return (
		<ContainerComponent flexGrow={1}>
			<div
				style={{
					flexGrow: 1,
					borderWidth: 1,
					borderStyle: 'solid',
					borderColor: colors.grey,
					borderRadius: 5,
					boxShadow: `0 0 10px ${colors.grey}`,
					padding: size.gap * 2,
				}}
			>
				<h4 style={{marginBottom: size.gap * 2}}>Библиотека</h4>
				<div style={{display: 'grid', gridTemplateColumns: `repeat(4, 1fr)`}}>
					{books.map(book => (
						<BookCartComponent key={book.id} book={book} selectToUpdate={selectToUpdate} deleteBook={deleteBook} />
					))}
					{!books.length && <h5>В библиотеке нет книг.</h5>}
				</div>
			</div>
		</ContainerComponent>
	)
}

export default LibraryComponent
