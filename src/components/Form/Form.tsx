import { FormEvent, useCallback, useRef } from "react";
import { useAppDispatch } from "../../hook/useRedux";
import { addTodo } from "../../store/slices/todoSlice";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { inputDescriptionProps, inputTitleProps } from "./constants";

export const Form = () => {
  const dispatch = useAppDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());

      if (!titleRef.current?.value) {
        titleRef.current?.classList.add("error");
      } else if (!descRef.current?.value) {
        titleRef.current?.classList.remove("error");
        descRef.current?.classList.add("error");
      } else {
        titleRef.current.value = "";
        descRef.current.value = "";
        titleRef.current?.classList.remove("error");
        descRef.current?.classList.remove("error");
        dispatch(addTodo(data));
      }
    },
    [titleRef, descRef]
  );

  return (
    <form className="App" onSubmit={handleSubmit}>
      <FormInput {...inputTitleProps} inputRef={titleRef} />
      <FormInput {...inputDescriptionProps} inputRef={descRef} />
      <Button title="Create" />
    </form>
  );
};
