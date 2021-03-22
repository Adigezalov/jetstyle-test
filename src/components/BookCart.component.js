import React from 'react'
import size from '../constants/size'
import colors from '../constants/colors'

const buttonContainer = {
	fontSize: 10,
	border: 0,
	padding: '5px 10px',
	color: colors.white,
	outline: 'none',
	cursor: 'pointer',
}

const imageContainer = {
	width: size.imageWidth,
	height: size.imageHeight,
	backgroundColor: colors.grey,
}

const BookCartComponent = props => {
	const {book, selectToUpdate, deleteBook} = props

	return (
		<div
			style={{
				paddingRight: size.gap,
				paddingLeft: size.gap,
				paddingBottom: size.gap,
				marginBottom: size.gap,
			}}
		>
			<div style={{...imageContainer}}>
				{book.cover ? (
					<img src={book.cover} alt={'cover'} style={{width: size.imageWidth, height: size.imageHeight}} />
				) : null}
			</div>
			<div style={{marginTop: size.gap}}>
				<p>{book.name}</p>
				<p style={{fontSize: 14}}>{book.author}</p>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<button
					type='button'
					style={{...buttonContainer, marginTop: size.gap, backgroundColor: colors.green}}
					onClick={() => selectToUpdate(book)}
				>
					Редактировать
				</button>
				<button
					type='button'
					style={{...buttonContainer, marginTop: size.gap, backgroundColor: colors.red}}
					onClick={() => deleteBook(book.id)}
				>
					Удалить
				</button>
			</div>
		</div>
	)
}

export default BookCartComponent
