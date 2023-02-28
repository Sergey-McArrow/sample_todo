import { createSlice } from '@reduxjs/toolkit'
import { Ttodo } from '../../types/Todo'
import { RootState } from '../store'

type TtodoState = {
	todos: Array<Ttodo>
}
const initialState: TtodoState = {
	todos: [],
}

export const todoSlice = createSlice({
	name: 'todoState',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				...action.payload,
				status: false,
				id: state.todos.length + 1,
			})
		},
		changeStatus: (state, action) => {
			const { id, status } = action.payload
			const index = state.todos.findIndex(todo => todo.id === id)
			if (index !== -1) {
				state.todos[index] = { ...state.todos[index], status: !status }
			}
		},
	},
})

export const { addTodo, changeStatus } = todoSlice.actions

// export const todos = (state: RootState) => state.todoState.todos

export default todoSlice.reducer
