import { FC } from 'react'
import { Ttodo } from '../types/Todo'

type Tpopup = {
	isOpen: boolean
	onClose: () => void
	todo: Ttodo
}

export const Popup: FC<Tpopup> = ({ isOpen, onClose, todo }) => {
	const { title, description } = todo
	return (
		<tr style={{ display: isOpen ? 'block' : 'none' }} className='modal'>
			<h2> {title}</h2>
			<p>{description}</p>
			<button onClick={onClose}>Close</button>
		</tr>
	)
}
