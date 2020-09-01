import React, { useRef } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'

import { ProductList } from './ProductList'
import { GET_STORES_AND_PRODUCTS } from '../../../graphql/Queries/product_queries'
import { ADD_PRODUCT } from '../../../graphql/Mutations/product_mutations'

export const Products = () => {
	const nameRef = useRef('')
	const itemCodeRef = useRef('')
	const priceRef = useRef('')

	const refetchData = {
		refetchQueries: mutationResult => [{ query: GET_STORES_AND_PRODUCTS }],
		awaitRefetchQueries: true,
	}

	const [addProduct] = useMutation(ADD_PRODUCT, refetchData)

	const handleAdd = () => {
		addProduct({
			variables: {
				name: nameRef.current.value,
				itemCode: itemCodeRef.current.value,
				price: parseFloat(priceRef.current.value),
			},
		})

		nameRef.current.value = ''
		itemCodeRef.current.value = ''
		priceRef.current.value = ''
	}

	return (
		<MainWrapper>
			<Title>All Products</Title>
			<Actions>
				<Input placeholder='Item Code' ref={itemCodeRef} />
				<Input placeholder='Name' ref={nameRef} />
				<Input placeholder='Price' ref={priceRef} />
				<Button color={'#43497e'} hoverColor={'#1c2260'} onClick={handleAdd}>
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
