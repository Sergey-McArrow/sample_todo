import { ChangeEvent, FC, useCallback } from "react"
import { useModalWindow } from "../hook/useModalWindow"
import { handleOpenPopup } from '../store/slices/modalSlice'
import { changeStatus } from "../store/slices/todoSlice"
import { Ttodo } from "../types/Todo"
import { useAppDispatch } from "./../hook/useRedux";

type TModalContent = {
  title: string, description: string
}

const ModalContent: FC<TModalContent> = ({ title, description }) => {
  return (
    <>
      <h2> {title}</h2>
      <p>{description}</p>
    </>
  )
};

export const TableRow: FC<Ttodo> = (props) => {
  const { id, title, description, status } = props
  // const { handleOpenPopup, Modal } = useModalWindow()

  const dispatch = useAppDispatch()
  const handleChangeStatus = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeStatus({ id, status }))
    },
    [status]
  );
  // const element = <ModalContent title={title} description={description} />

  return (
    <>
      <tr>
        <td>{id}</td>
        <td
          style={{ color: "blue" }}
          onClick={() =>
            dispatch(handleOpenPopup({ title, description }))
          }
        >
          {title}
        </td>
        <td>{description}</td>
        <td>
          <input
            type="checkbox"
            name="status"
            checked={status}
            onChange={handleChangeStatus}
          />
        </td>
      </tr>
    </>
  )
}
