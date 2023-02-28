import React, { ChangeEvent, FC } from 'react'
import { changeStatus } from '../store/slices/todoSlice'
import { Ttodo } from '../types/Todo'
import { useAppDispatch } from './../hook/useRedux'

export const TableRow: FC<Ttodo> = ({ id, title, description, status }) => {
	const dispatch = useAppDispatch()
	const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
		const payload = { id, status }
		dispatch(changeStatus(payload))
	}

	return (
		<tr>
			<td>{id}</td>
			<td>{title}</td>
			<td>{description}</td>
			<td>
				<input
					type='checkbox'
					name='status'
					checked={status}
					onChange={handleChangeStatus}
				/>
			</td>
		</tr>
	)
}
