import React, { useState } from 'react'
import styled from 'styled-components'

import { DeleteIcon } from '../../Utilities/Icons/index'

export const AddRemove = ({ initialState }) => {
	const [state, setState] = useState(initialState)
	const [response, setResponse] = useState('')
	const [responseColor, setResponseColor] = useState('')

	const addInput = () => {
		state.push({ __typename: 'Store', location: '' })
		setState(state)
		console.log('state', state)
	}

	const handleChange = (event, index) => {
		state[index].location = event.target.value
		setState(state)
		console.log('state', state)
	}

	const save = () => {
		try {
			setResponse('Saved successfully!')
			setResponseColor('green')
		} catch {
			setResponse('An error has occurred.')
			setResponseColor('red')
		}
		console.log('state', state)
	}

	const remove = index => {
		state.splice(index, 1)
		setState(state)
		console.log('state', state)
	}

	console.log('state', state)

	return (
		<MainWrapper>
			{state.map((element, index) => (
				<InputWrapper key={index}>
					<Input
						value={element.location}
						onChange={event => handleChange(event, index)}
					/>
					<IconWrapper onClick={() => remove(index)}>
						<DeleteIcon />
					</IconWrapper>
				</InputWrapper>
			))}
			<ButtonsWrapper>
				<Button onClick={addInput}>Add</Button>
				<Button onClick={save}>Save</Button>
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
