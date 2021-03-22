import React from 'react'
import size from '../constants/size'

const TextFieldComponent = props => {
	const {label, onChange, value, name} = props

	return (
		<div style={{display: 'flex', flexDirection: 'column', marginBottom: size.gap * 2}}>
			<label htmlFor={name} style={{marginBottom: size.gap}}>
				{label}
			</label>
			<input
				type='text'
				id={name}
				name={name}
				value={value || ''}
				style={{padding: size.gap}}
				onChange={event => {
					onChange(event)
				}}
			/>
		</div>
	)
}

export default TextFieldComponent
