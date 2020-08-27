import React, { createContext, useReducer } from 'react'

const initialState = {
	stores: ['BRO', 'MTL'],
}

const ACTIONS = {
	ADD_STORE: 'add_store',
	REMOVE_STORE: 'remove_store',
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_STORE:
			return { ...state, store: action.payload.store }
		case ACTIONS.REMOVE_STORE:
			const newStore = state.stores.filter(
				store => store !== action.payload.store
			)
			return { ...state, store: newStore }
		default:
			return state
	}
}

export const Context = createContext()

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<Context.Provider value={ { state, dispatch } }>{children}</Context.Provider>
	)
}
