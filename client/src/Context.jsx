import React, { createContext, useReducer } from 'react'

const initialState = {
	stores: ['BRO', 'WI', 'Laval'],
}

export const ACTIONS = {
	SET_STORE: 'set_store',
	REMOVE_STORE: 'remove_store',
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET_STORE:
			return { ...state, stores: action.payload.stores }
		// case ACTIONS.REMOVE_STORE:
		// 	const newStore = state.stores.filter(
		// 		store => store !== action.payload.store
		// 	)
		// 	return { ...state, stores: newStore }
		default:
			return state
	}
}

export const Context = createContext()

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
	)
}
