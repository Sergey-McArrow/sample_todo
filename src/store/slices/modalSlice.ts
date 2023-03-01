import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactElement } from 'react'

type TmodalState = {
	isOpen: boolean
	content: {
		title: string
		description: string
	}
}

const initialState: TmodalState = {
	isOpen: false,
	content: {
		title: '',
		description: '',
	},
}
export const modalSlice = createSlice({
	name: 'modelState',
	initialState,
	reducers: {
		handleOpenPopup: (state, action) => {
			state.content = action.payload
			state.isOpen = true
		},
		handleClosePopup: state => {
			state.isOpen = false
		},
	},
})

export const { handleOpenPopup, handleClosePopup } = modalSlice.actions

export default modalSlice.reducer
