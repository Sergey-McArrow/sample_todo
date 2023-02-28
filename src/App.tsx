import './App.css'
import { FormEvent } from 'react'
import { Button } from './components/Button'
import { FormInput } from './components/FormInput'
import { TodosTable } from './components/Table'
import { useAppDispatch } from './hook/useRedux'
import { addTodo } from './store/slices/todoSlice'

function App() {
	const dispatch = useAppDispatch()

	const inputTitleProps = {
		name: 'title',
		type: 'text',
		placeholder: 'Enter title',
		required: true,
		label: 'Title:',
		errorMessage: 'This field is empty',
	}
	const inputDescriptionProps = {
		name: 'description',
		type: 'text',
		placeholder: 'Enter description',
		required: true,
		label: 'Description:',
		errorMessage: 'This field is empty',
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData.entries())
		dispatch(addTodo(data))
	}
	return (
		<>
			<form className='App' onSubmit={handleSubmit}>
				<FormInput {...inputTitleProps} />
				<FormInput {...inputDescriptionProps} />
				<Button type='submit' title='Create' />
			</form>
			<TodosTable />
		</>
	)
}

export default App
