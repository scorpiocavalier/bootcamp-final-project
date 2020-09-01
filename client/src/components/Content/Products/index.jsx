import React, { useRef } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'

import { ProductList } from './ProductList'
import { GET_PRODUCTS } from '../../../graphql/Queries/product_queries'
import { ADD_PRODUCT } from '../../../graphql/Mutations/product_mutations'

export const Products = () => {
	const nameRef = useRef('')
	const itemCodeRef = useRef('')
	const priceRef = useRef('')
	const descRef = useRef('')

	const refetchData = {
		refetchQueries: mutationResult => [{ query: GET_PRODUCTS }],
		awaitRefetchQueries: true,
	}

	const [addProduct] = useMutation(ADD_PRODUCT, refetchData)

	const handleAdd = () => {
		addProduct({
			variables: {
				name: nameRef.current.value,
				itemCode: itemCodeRef.current.value,
				description: descRef.current.value,
				price: parseFloat(priceRef.current.value),
			},
		})

		nameRef.current.value = ''
		itemCodeRef.current.value = ''
		descRef.current.value = ''
		priceRef.current.value = ''
	}

	return (
		<MainWrapper>
			<Title>All Products</Title>
			<Actions>
				<ItemCodeInput placeholder='Item Code' ref={itemCodeRef} />
				<PriceInput placeholder='Price' ref={priceRef} />
				<NameInput placeholder='Name' ref={nameRef} />
				<DescInput placeholder='Description' ref={descRef} />
				<AddButton color={'#43497e'} hoverColor={'#1c2260'} onClick={handleAdd}>
					Add
				</AddButton>
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		'item-code price'
		'name name'
		'desc desc'
		'add-btn add-btn';
	row-gap: 10px;
	column-gap: 10px;
	margin: 10px 0;
`

const Input = styled.input`
	height: 2rem;
	padding: 5px;
`

const ItemCodeInput = styled(Input)`
	grid-area: item-code;
`

const PriceInput = styled(Input)`
	grid-area: price;
`

const NameInput = styled(Input)`
	grid-area: name;
`

const DescInput = styled(Input)`
	grid-area: desc;
`

const Button = styled.button`
	height: 2rem;
	padding: 5px 15px;
	background: ${p => p.color};
	color: white;

	&:hover {
		background: ${p => p.hoverColor};
	}
`

const AddButton = styled(Button)`
	grid-area: add-btn;
`
