import { FC } from 'react'
import { Ttodo } from '../types/Todo'

type TpopupProps = {
	isOpen: boolean
	onClose: () => void
	popupTodo: Ttodo
}

export const Popup: FC<TpopupProps> = ({ isOpen, onClose, popupTodo }) => {
	const { title, description } = popupTodo
	return (
		<div style={{ display: isOpen ? 'block' : 'none' }} className='modal'>
			<h2> {title}</h2>
			<p>{description}</p>
			<button onClick={onClose}>Close</button>
		</div>
	)
}
