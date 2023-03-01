import React, { ButtonHTMLAttributes, FC } from "react";

type TButtonProps = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined; //look for existed type 
};

export const Button: FC<TButtonProps> = ({ type, title }) => (
  <button type={type}>{title}</button>
);
