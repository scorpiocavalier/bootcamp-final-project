import React, { useState } from 'react'
import styled from 'styled-components'

import { InventoryCountList } from './InventoryCountList'

export const InventoryCounter = () => {
	const [inputText, setInputText] = useState('')

	const [inventory, setInventory] = useState({})

	const handleChange = e => setInputText(e.target.value)

	const addItem = e => {
		if (e.key === 'Enter' && inputText.length > 0) {
			if (inventory[inputText]) {
				setInventory({ ...inventory, [inputText]: inventory[inputText] + 1 })
			} else {
				setInventory({ ...inventory, [inputText]: 1 })
			}
			setInputText('')
		}
	}

	const decrement = (itemCode, quantity) => {
		if (quantity === 1) {
			remove(itemCode)
		} else {
			setInventory({ ...inventory, [itemCode]: quantity - 1 })
		}
	}

	const increment = (itemCode, quantity) => {
		setInventory({ ...inventory, [itemCode]: quantity + 1 })
	}

	const remove = itemCode => {
		const inventoryCopy = { ...inventory }
		delete inventoryCopy[itemCode]
		setInventory(inventoryCopy)
	}

	const actions = { decrement, increment, remove }

	return (
		<MainWrapper>
			<Title>Inventory Counter</Title>
			<Input
				type='text'
				name='itemCode'
				value={inputText}
				onChange={handleChange}
				onKeyDown={addItem}
				placeholder='Enter an item code'
			/>
			<InventoryCountList inventory={inventory} actions={actions} />
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Title = styled.h3`
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 20px;
`

const Input = styled.input`
	width: 400px;
	height: 30px;
	padding: 5px;
`
