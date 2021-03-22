import React from 'react'
import colors from '../constants/colors'
import size from '../constants/size'

const buttonContainer = {
	fontSize: 12,
	border: 0,
	padding: '10px 20px',
	color: colors.white,
	outline: 'none',
	cursor: 'pointer',
}

const imageContainer = {
	width: size.imageWidth,
	height: size.imageHeight,
	backgroundColor: colors.grey,
}

const CoverComponent = props => {
	const {imagePreview, setImage, resetImage} = props

	return (
		<div style={{display: 'flex', marginBottom: size.gap * 2, justifyContent: 'space-between'}}>
			<div style={imageContainer}>
				{imagePreview ? (
					<img src={imagePreview} alt={'cover'} style={{width: size.imageWidth, height: size.imageHeight}} />
				) : null}
			</div>
			<div>
				<input
					accept='image/*'
					style={{display: 'none'}}
					id='preview'
					multiple
					name='cover'
					type='file'
					onChange={event => {
						setImage(event)
					}}
				/>
				<label htmlFor='preview'>
					<div style={{...buttonContainer, backgroundColor: colors.green}}>Выбрать обложку</div>
				</label>
				<button
					disabled={!imagePreview}
					type='button'
					value='Создать книгу'
					style={{...buttonContainer, marginTop: size.gap, backgroundColor: imagePreview ? colors.red : colors.grey}}
					onClick={resetImage}
				>
					Удалить обложку
				</button>
			</div>
		</div>
	)
}

export default CoverComponent
