import { FormEvent, useCallback, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hook/useRedux"
import { addTodo } from "../../store/slices/todoSlice"
import { Button } from "../Button"
import { FormInput } from "../FormInput"
import { inputDescriptionProps, inputTitleProps } from "./constants"
import { handleClosePopup } from '../../store/slices/modalSlice'

export const Form = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.modalState.isOpen)
  const { title, description } = useAppSelector(state => state.modalState.content)

  const titleRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLInputElement>(null)
  const [isTitleValid, setIsTitleValid] = useState<boolean>(true)
  const [isDescValid, setIsDescValid] = useState<boolean>(true)

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData.entries())
      setIsTitleValid(!!titleRef.current?.value)
      setIsDescValid(!!descRef.current?.value)

      if (titleRef.current?.value && descRef.current?.value) {
        titleRef.current.value = ""
        descRef.current.value = ""
        dispatch(addTodo(data))
      }
    },
    [titleRef, descRef]
  )


  return (
    <>
      <form className="App" onSubmit={handleSubmit}>
        <FormInput
          {...inputTitleProps}
          isValid={isTitleValid}
          inputRef={titleRef}
        />
        <FormInput
          {...inputDescriptionProps}
          isValid={isDescValid}
          inputRef={descRef}
        />
        <Button title="Create" />
      </form>
      {isOpen ? <div className="modal">
        <h2> {title} </h2>
        <p> {description} </p>
        <button onClick={() => dispatch(handleClosePopup())}>Close</button>
      </div> : null}
    </>
  )
}
