import React, { FC } from 'react'

type TFormInputProps = {
	label: string
	errorMessage: string
	name: string
	type: string
	placeholder: string
	required?: boolean
}

export const FormInput: FC<TFormInputProps> = props => {
	const { label, errorMessage, ...inputProps } = props

	return (
		<div className='formInput'>
			<label>{label}</label>
			<input {...inputProps} />
			<span>{errorMessage}</span>
		</div>
	)
}
