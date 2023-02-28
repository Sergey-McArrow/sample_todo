import React, { ButtonHTMLAttributes, FC } from 'react'

type TButtonProps = {
	title: string
	type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button: FC<TButtonProps> = ({ type, title }) => {
	return (
		<div>
			<button type={type}>{title}</button>
		</div>
	)
}
