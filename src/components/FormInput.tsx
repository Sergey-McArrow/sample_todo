import { FC, MutableRefObject, useEffect, useRef, useState } from "react"

type TFormInputProps = {
  label: string
  errorMessage: string
  name: string
  placeholder: string
  type?: string
  required?: boolean
  inputRef: MutableRefObject<any>
}

export const FormInput: FC<TFormInputProps> = (props) => {
  const { inputRef, label, errorMessage, ...inputProps } = props
  // const [isValid, setIsValid] = useState(true)

  return (
    <div className="formInput">
      <label>{label}
        <input
          ref={inputRef}
          {...inputProps}
          // style={{ borderColor: isValid ? "" : "red" }}
        />
      </label>
      {/* {!isValid ? <span>{errorMessage}</span> : null} */}
    </div>
  )
}
