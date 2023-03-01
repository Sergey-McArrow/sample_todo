import React, { ButtonHTMLAttributes, FC } from "react";

export const Button: FC<{ title: string }> = ({ title }) => (
  <button>{title}</button>
);
