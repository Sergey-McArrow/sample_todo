import { ChangeEvent, FC, useState } from 'react'
import { changeStatus } from '../store/slices/todoSlice'
import { Ttodo } from '../types/Todo'
import { useAppDispatch } from './../hook/useRedux'
import { Popup } from './Popup'

export const TableRow: FC<Ttodo> = props => {
	const { id, title, description, status } = props
	const [popupOpen, setPopupOpen] = useState<boolean>(false)

	const dispatch = useAppDispatch()
	const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
		const payload = { id, status }
		dispatch(changeStatus(payload))
	}
	const handleClosePopup = () => {
		setPopupOpen(false)
	}

	return (
		<>
			<tr>
				<td>{id}</td>
				<td style={{ color: 'blue' }} onClick={() => setPopupOpen(true)}>
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
			<Popup isOpen={popupOpen} onClose={handleClosePopup} todo={props} />
		</>
	)
}
