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
			<NewProductWrapper>
				<Title>Add a New Product</Title>
				<Actions>
					<ItemCodeInput placeholder='Item Code' ref={itemCodeRef} tabindex='1' />
					<NameInput placeholder='Name' ref={nameRef} tabindex='2' />
					<PriceInput placeholder='Price' ref={priceRef} tabindex='3' />
					<DescInput placeholder='Description' ref={descRef} tabindex='4' />
					<AddButton
						color={'#43497e'}
						hoverColor={'#1c2260'}
						onClick={handleAdd}>
						Add
					</AddButton>
				</Actions>
			</NewProductWrapper>
			<AllProducts>All Products</AllProducts>
			<ProductList />
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const NewProductWrapper = styled.div`
	border: 2px solid #1c2260;
	padding: 15px;
`

const Title = styled.h3`
	grid-area: title;
	margin-bottom: 10px;
	text-align: center;
	font-size: 1.5rem;
	font-weight: 500;
`

const AllProducts = styled.h3`
	margin-top: 2rem;
	text-align: center;
	font-size: 2.3rem;
	font-weight: 500;
`

const Actions = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-areas:
		'item-code item-code price price'
		'name name name name'
		'desc desc desc desc'
		'. add-btn add-btn .';
	row-gap: 10px;
	column-gap: 10px;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			'item-code name price'
			'desc desc add-btn';
	}
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
