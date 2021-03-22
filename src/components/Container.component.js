import React from 'react'
import size from '../constants/size'

const ContainerComponent = props => {
	const {children, flexGrow, style} = props

	return (
		<div style={{flexGrow: flexGrow, display: 'flex', minHeight: '100%', padding: size.gap, ...style}}>{children}</div>
	)
}

export default ContainerComponent
