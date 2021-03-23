import React from 'react'
import colors from '../constants/colors'
import size from '../constants/size'
import TextFieldComponent from './TextField.component'
import ContainerComponent from './Container.component'
import CoverComponent from './Cover.component'

const buttonContainer = {
	fontSize: 12,
	border: 0,
	paddingTop: size.gap,
	paddingRight: size.gap * 2,
	paddingBottom: size.gap,
	paddingLeft: size.gap * 2,
	color: colors.white,
	outline: 'none',
	cursor: 'pointer',
}

const LEFT_WIDTH = 400

const NewBookComponent = props => {
	const {imagePreview, setImage, setBookData, editBook, resetImage, book, disableEditBook, resetBook} = props

	return (
		<ContainerComponent style={{width: LEFT_WIDTH}}>
			<div
				style={{
					position: 'fixed',
					top: size.gap,
					right: size.gap,
					width: LEFT_WIDTH - size.gap * 4,
					flexGrow: 1,
					borderWidth: 1,
					borderStyle: 'solid',
					borderColor: colors.grey,
					borderRadius: 5,
					boxShadow: `0 0 10px ${colors.grey}`,
					padding: size.gap * 2,
				}}
			>
				<h4 style={{marginBottom: size.gap * 2}}>{book.id ? 'Редактировать книгу' : 'Новая книга'}</h4>
				<form>
					<CoverComponent imagePreview={imagePreview} setImage={setImage} removeImage={resetImage} />
					<TextFieldComponent label={'Автор книги'} name={'author'} value={book.author} onChange={setBookData} />
					<TextFieldComponent label={'Название книги'} name={'name'} value={book.name} onChange={setBookData} />
					<div style={{display: 'flex', justifyContent: 'flex-end'}}>
						<button
							disabled={disableEditBook}
							type='submit'
							style={{
								...buttonContainer,
								backgroundColor: disableEditBook ? colors.grey : colors.green,
								marginRight: size.gap,
							}}
							onClick={event => editBook(event)}
						>
							{book.id ? 'Редактировать книгу' : 'Создать книгу'}
						</button>
						<button
							type='submit'
							style={{...buttonContainer, backgroundColor: colors.red}}
							onClick={event => resetBook(event)}
						>
							Отмена
						</button>
					</div>
				</form>
			</div>
		</ContainerComponent>
	)
}

export default NewBookComponent
