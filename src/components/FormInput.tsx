import { FC, MutableRefObject, RefObject } from "react";

type TFormInputProps = {
  label: string;
  errorMessage: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  inputRef: RefObject<HTMLInputElement>;
  isValid: boolean;
};

export const FormInput: FC<TFormInputProps> = (props) => {
  const { inputRef, label, errorMessage, isValid, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>
        {label}
        <input
          ref={inputRef}
          {...inputProps}
          style={{ borderColor: isValid ? "inherit" : "red" }}
        />
      </label>
      {!isValid ? <span>{errorMessage}</span> : null}
    </div>
  );
};
