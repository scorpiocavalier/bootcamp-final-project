import React from 'react'
import styled from 'styled-components'

import { MinusIcon, PlusIcon, DeleteIcon } from '../../Utilities/Icons/index'

export const InventoryItem = ({
	itemCode,
	quantity,
	actions: { decrement, increment, remove },
}) => {
	return (
		<ListItem>
			<span>{itemCode}</span>
			<span>{quantity}</span>
			<CRUD>
				<IconWrapper onClick={() => decrement(itemCode, quantity)}>
					<MinusIcon fill={'white'} size={'1rem'} />
				</IconWrapper>
				<IconWrapper onClick={() => increment(itemCode, quantity)}>
					<PlusIcon fill={'white'} size={'1rem'} />
				</IconWrapper>
				<IconWrapper onClick={() => remove(itemCode)}>
					<DeleteIcon fill={'white'} size={'1rem'} />
				</IconWrapper>
			</CRUD>
		</ListItem>
	)
}

const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
  margin-top: 10px;
`

const CRUD = styled.div`
	display: flex;
`

const IconWrapper = styled.div`
	padding: 10px;
	margin-left: 10px;
	border-radius: 5px;
	background: #43497e;
	color: white;

	&:hover {
		cursor: pointer;
    background: #1c2260;
	}
`
