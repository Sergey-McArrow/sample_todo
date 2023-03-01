import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import modalReducer from './slices/modalSlice'

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
})

export const store = configureStore({
	reducer: {
		todoState: todoReducer,
		modalState: modalReducer,
	},
	middleware: customizedMiddleware,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
