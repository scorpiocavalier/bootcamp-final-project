import React, { createContext, useReducer } from 'react'

const initialState = {
	stores: [],
	products: [],
}

const ACTIONS = {
	SET_STORES: 'set_stores',
	SET_PRODCUTS: 'set_products'
}

const reducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case ACTIONS.SET_STORES:
			return { ...state, stores: payload }
		case ACTIONS.SET_PRODCUTS:
			return { ...state, products: payload }
		default:
			return state
	}
}

export const Context = createContext()

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const setStores = (payload) => dispatch({ type: ACTIONS.SET_STORES, payload })
	const setProducts = (payload) => dispatch({ type: ACTIONS.SET_PRODCUTS, payload })

	const actions = [setStores, setProducts]

	return (
		<Context.Provider value={{ state, actions, ACTIONS }}>{children}</Context.Provider>
	)
}
