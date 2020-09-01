import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'

import { DeleteIcon } from '../../Utilities/Icons/index'
import { ADD_STORE } from '../../../graphql/Mutations/store_mutations'

export const AddRemove = () => {
	const [storeInput, setStoreInput] = useState()
	const [response, setResponse] = useState('')
	const [responseColor, setResponseColor] = useState('')

	const storeRef = useRef()

	const [addStore] = useMutation(ADD_STORE)

	const add = () => {
		try {
			addStore({
				variables: {
					location: storeRef.current.value,
				},
			})
			setResponse(`${storeInput} was saved successfully!`)
			setResponseColor('green')
		} catch {
			setResponse('An error has occurred.')
			setResponseColor('red')
		}

		setStoreInput('')
	}

	return (
		<MainWrapper>
			<InputWrapper>
				<Input
					value={storeInput}
					onChange={e => setStoreInput(e.target.value)}
					ref={storeRef}
				/>
				<IconWrapper>
					<DeleteIcon />
				</IconWrapper>
			</InputWrapper>

			<ButtonsWrapper>
				<Button onClick={add}>Add Store</Button>
			</ButtonsWrapper>

			<Response color={responseColor}>{response}</Response>
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

	&:hover {
		background: #1c2260;
	}
`

const Response = styled.span`
	margin-top: 20px;
	color: ${p => p.color};
`
