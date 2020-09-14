import React from 'react'
import styled from 'styled-components'
import { InventoryItem } from './InventoryItem'

export const InventoryCountList = ({ inventory, actions }) => {
	return (
		<List>
			{Object.entries(inventory).map(([itemCode, quantity]) => (
				<InventoryItem
					key={itemCode + quantity}
					itemCode={itemCode}
					quantity={quantity}
					actions={actions}
				/>
			))}
		</List>
	)
}

const List = styled.ul`
	margin-top: 20px;
	width: 400px;
`
