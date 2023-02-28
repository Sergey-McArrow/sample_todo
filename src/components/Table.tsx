import React from 'react'
import { useAppSelector } from '../hook/useRedux'
import { TableRow } from './TableRow'

export const TodosTable = () => {
	const todosData = useAppSelector(state => state.todoState.todos)
	return (
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
					<TableRow key={index} {...todo} />
				))}
			</tbody>
		</table>
	)
}
