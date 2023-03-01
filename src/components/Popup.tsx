import { FC } from "react"
import { Ttodo } from "../types/Todo";

type TpopupProps = {
  children: JSX.Element
  onClose: () => void
};

export const Popup: FC<TpopupProps> = ({ children, onClose }) => {
  return (
    <div className="modal">
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  )
}
