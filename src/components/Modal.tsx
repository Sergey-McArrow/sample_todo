import { FC, ReactElement } from 'react'

interface TModalProps {
    isOpen: boolean,
    children: ReactElement | JSX.Element
}

export const Modal: FC<TModalProps> = ({ isOpen, children }) => {
    return (
        <div >
            {
                isOpen &&
                <div id="overlay">
                    <div className="modal">
                        <h1>hello</h1>
                        {children}
                    </div>
                </div>
            }
        </div>
    )
}