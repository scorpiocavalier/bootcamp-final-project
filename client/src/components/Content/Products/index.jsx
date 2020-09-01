import React from 'react'
import styled from 'styled-components'

import { ProductList } from './ProductList'

export const Products = () => {
	return (
		<MainWrapper>
			<Title>All Products</Title>
			<Actions>
				<Input placeholder='Item Code' />
				<Input placeholder='Name' />
				<Input placeholder='Price' />
				<Button color={'#43497e'} hoverColor={'#1c2260'}>
					Add
				</Button>
			</Actions>
			<ProductList />
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.h3`
	grid-area: title;
`

const Actions = styled.div`
	padding: 10px 0;
`

const Input = styled.input`
	margin-right: 10px;
	height: 2rem;
	padding: 5px;
`

const Button = styled.button`
	margin-right: 10px;
	height: 2rem;
	padding: 5px 15px;
	background: ${p => p.color};
	color: white;

	&:hover {
		background: ${p => p.hoverColor};
	}
`