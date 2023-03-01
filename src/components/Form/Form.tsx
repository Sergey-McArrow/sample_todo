import { FormEvent, useCallback, useRef, useState } from "react";
import { useAppDispatch } from "../../hook/useRedux";
import { addTodo } from "../../store/slices/todoSlice";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { inputDescriptionProps, inputTitleProps } from "./constants";

export const Form = () => {
  const dispatch = useAppDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const [isTitleValid, setIsTitleValid] = useState<boolean>(true);
  const [isDescValid, setIsDescValid] = useState<boolean>(true);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());
      setIsTitleValid(!!titleRef.current?.value);
      setIsDescValid(!!descRef.current?.value);

      if (titleRef.current?.value && descRef.current?.value) {
        titleRef.current.value = "";
        descRef.current.value = "";
        dispatch(addTodo(data));
      }
    },
    [titleRef, descRef]
  );

  return (
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
  );
};
