import React, { useContext, useState, useRef } from 'react'
import styled from 'styled-components'

import { Context, ACTIONS } from '../../../Context'
import { DeleteIcon } from '../../Icons'

export const AddRemoveStores = () => {
	const { state, dispatch } = useContext(Context)
	const [stores, setStores] = useState([...state.stores])

	const addStoreInput = () => {
		stores.push('')
		setStores([...stores])
	}

	const handleChange = (e, index) => {
		stores[index] = e.target.value
		setStores([...stores])
	}

	const saveStores = () => {
		dispatch({ type: ACTIONS.SET_STORE, payload: { stores } })
	}

	return (
		<MainWrapper>
			{stores.map((store, index) => {
				console.log(index, 'GLOBAL', state.stores[index])
				console.log(index, 'LOCAL', store)

				return (
					<InputWrapper key={index}>
						<Input value={store} onChange={e => handleChange(e, index)} />
						<IconWrapper onClick={() => console.log('remove')}>
							<DeleteIcon />
						</IconWrapper>
					</InputWrapper>
				)
			})}
			<ButtonsWrapper>
				<Button onClick={addStoreInput}>Add a store</Button>
				<Button onClick={saveStores}>Save Settings</Button>
			</ButtonsWrapper>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 10px;
`

const InputWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0;
	height: 2rem;
	width: 100%;
`

const IconWrapper = styled.div`
	&:hover {
		cursor: pointer;
	}
`

const ButtonsWrapper = styled.div`
	display: flex;
`

const Input = styled.input`
	height: 100%;
	padding: 0 10px;
	margin-right: 10px;
`

const Button = styled.button`
	padding: 0.8rem;
	margin-top: 10px;
	margin-right: 10px;
	border-radius: 5px;
	background: #43497e;
	color: white;
`
