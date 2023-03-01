import { ChangeEvent, Dispatch, FC, useCallback, useState } from 'react'
import { changeStatus } from '../store/slices/todoSlice'
import { Ttodo } from '../types/Todo'
import { useAppDispatch } from './../hook/useRedux'

type TTableRowProps = Ttodo & { handleOpenPopup: (id: number) => void }

export const TableRow: FC<TTableRowProps> = props => {
	const { id, title, description, status, handleOpenPopup } = props

	const dispatch = useAppDispatch()
	const handleChangeStatus = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			// const payload = { id, status }
			dispatch(changeStatus({ id, status }))
		},
		[status],
	)

	return (
		<tr>
			<td>{id}</td>
			<td style={{ color: 'blue' }} onClick={() => handleOpenPopup(id)}>
				{title}
			</td>
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
