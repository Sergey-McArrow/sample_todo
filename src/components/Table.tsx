import React, { useCallback, useState } from 'react'
import { useAppSelector } from '../hook/useRedux'
import { TableRow } from './TableRow'
import { Popup } from './Popup'
import { Ttodo } from '../types/Todo'

export const TodosTable = () => {
	const todosData = useAppSelector(state => state.todoState.todos)
	const [popupOpen, setPopupOpen] = useState<boolean>(false)
	const [popupTodo, setPopupTodo] = useState<Ttodo | null>(null)

	const handleOpenPopup = useCallback(
		(id: number) => {
			const popupData = todosData.find(todo => todo.id === id)
			popupData && setPopupTodo(popupData)
			setPopupOpen(true)
		},
		[popupOpen],
	)

	const handleClosePopup = useCallback(() => {
		setPopupOpen(false)
	}, [popupOpen])

	return (
		<>
			<table className='table'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{todosData.map((todo, index) => (
						<TableRow key={index} {...todo} handleOpenPopup={handleOpenPopup} />
					))}
				</tbody>
			</table>
			{popupTodo ? (
				<Popup
					isOpen={popupOpen}
					onClose={handleClosePopup}
					popupTodo={popupTodo}
				/>
			) : null}
		</>
	)
}
