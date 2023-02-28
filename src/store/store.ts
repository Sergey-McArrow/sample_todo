import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'

export const store = configureStore({
	reducer: {
		todoState: todoReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
