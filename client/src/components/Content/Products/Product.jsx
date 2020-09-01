import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'

import { GET_STORES_AND_PRODUCTS } from '../../../graphql/Queries/queries'
import { DELETE_PRODUCT } from '../../../graphql/Mutations/product_mutations'
import { Modal } from '../../Utilities/Modal/index'
import { AcceptIcon, CloseIcon } from '../../Utilities/Icons/index'

export const Product = ({ product, stores }) => {
	const [openDetails, setOpenDetails] = useState(false)
	const [deletePlaceholder, setDeletePlaceholder] = useState('Delete')
	const [openEdit, setOpenEdit] = useState(false)
	const [showConfirmDelete, setShowConfirmDelete] = useState(false)

	const refetchData = {
		refetchQueries: mutationResult => [{ query: GET_STORES_AND_PRODUCTS }],
		awaitRefetchQueries: true,
	}

	const [deleteProduct] = useMutation(DELETE_PRODUCT, refetchData)

	const toggle = () => setOpenDetails(!openDetails)

	const triggerEdit = itemCode => {}

	const triggerDelete = () => {
		if (deletePlaceholder instanceof Object) {
			setShowConfirmDelete(false)
			setDeletePlaceholder('Delete')
		} else {
			setShowConfirmDelete(true)
			setDeletePlaceholder(<CloseIcon fill={'white'} />)
		}
	}

	const confirmDelete = itemCode => {
		deleteProduct({ variables: { itemCode } })
	}

	return (
		<ProductWrapper>
			<ProductHeader onClick={toggle}>
				<ItemCodeHeader>Item Code</ItemCodeHeader>
				<NameHeader>Name</NameHeader>
				<PriceHeader>Price</PriceHeader>
			</ProductHeader>

			<ItemInfo onClick={toggle}>
				<ItemCode>{product.itemCode}</ItemCode>
				<Name>{product.name}</Name>
				<Price>$ {product.price}</Price>
			</ItemInfo>

			<ItemDetails openDetails={openDetails}>
				<DescriptionWrapper>
					<Description>{product.description}</Description>

					<EditDelete>
						<EditButton
							onClick={() => triggerEdit(product.itemCode)}
							showConfirmDelete={showConfirmDelete}>
							<Text>Edit</Text>
						</EditButton>

						<ConfirmButton
							onClick={() => confirmDelete(product.itemCode)}
							showConfirmDelete={showConfirmDelete}>
							<Text>
								<AcceptIcon fill={'white'} />
							</Text>
						</ConfirmButton>

						<DeleteButton onClick={triggerDelete}>
							<Text>{deletePlaceholder}</Text>
						</DeleteButton>
					</EditDelete>
				</DescriptionWrapper>

				<StoreWrapper>
					<StoreHeader>
						{stores.map((store, index) => (
							<Store key={index}>{store.location}</Store>
						))}
					</StoreHeader>

					<StockInfo>
						{/* TODO: StoreStock */}
						{stores.map((store, index) => (
							<Stock key={store + index}>{index}</Stock>
						))}
					</StockInfo>
				</StoreWrapper>
			</ItemDetails>
		</ProductWrapper>
	)
}

const Accordion = styled.div`
	max-height: ${p => (p.openDetails ? '500px' : '0')};
	opacity: ${p => (p.openDetails ? '1' : '0')};
	overflow-y: hidden;
	transition: all 0.3s ease-out;
`

const ProductWrapper = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr;
	grid-template-areas:
		'header'
		'item-info'
		'item-details';
	margin: 1rem auto;
	border: 2px solid #1c2260;
`

const Header = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 5px;
	background: #43497e;
	color: white;
`

const ProductHeader = styled.div`
	grid-area: header;
	display: grid;
	grid-template-columns:
		minmax(120px, 1fr)
		minmax(200px, 10fr)
		minmax(120px, 1fr);
	grid-template-areas: 'header-item-code header-name header-price';
	padding: 5px;
	background: #43497e;
	color: white;

	@media (min-width: 1024px) {
		justify-content: flex-start;
	}
`

const ItemCodeHeader = styled(Header)`
	grid-area: header-item-code;
`

const NameHeader = styled(Header)`
	grid-area: header-name;
`

const PriceHeader = styled(Header)`
	grid-area: header-price;
	justify-content: flex-end;
`

const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 5px;
	background: #f4f6f8;
	color: black;
`

const ItemInfo = styled(Item)`
	grid-area: item-info;
	display: grid;
	grid-template-columns:
		minmax(120px, 1fr)
		minmax(200px, 10fr)
		minmax(120px, 1fr);
	grid-template-areas: 'item-code name price';
`

const ItemCode = styled(Item)`
	grid-area: item-code;
`

const Name = styled(Item)`
	grid-area: name;
`

const Price = styled(Item)`
	grid-area: price;
	justify-content: flex-end;
`

const ItemDetails = styled(Accordion)`
	grid-area: item-details;
	padding-bottom: ${p => (p.openDetails ? '10px' : '0')};
`

const DescriptionWrapper = styled.div`
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-template-areas: 'description editdelete';
	padding: 0 10px;
`

const Description = styled.p`
	grid-area: description;
	padding: 10px 0;
`

const EditDelete = styled.div`
	grid-area: editdelete;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	padding: 5px 0;

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: flex-end;
	}
`

const Button = styled.button`
	margin: 5px 0 5px 10px;
	width: 4rem;
	height: 35px;
	padding: 5px 15px;
	color: white;
	background: #43497e;
`

const EditButton = styled(Button)`
	display: ${p => (p.showConfirmDelete ? 'none' : 'normal')};
	&:hover {
		background: darkgreen;
	}
`

const ConfirmButton = styled(Button)`
	display: ${p => (p.showConfirmDelete ? 'normal' : 'none')};
	&:hover {
		background: darkgreen;
	}
`

const DeleteButton = styled(Button)`
	&:hover {
		background: darkred;
	}
`

const StoreWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 10px;
`

const StockInfo = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	padding: 5px 0;
`

const StoreHeader = styled(StockInfo)`
	background: #ffc107;
`

const Store = styled.span`
	min-width: 110px;
	text-align: center;
`

const Stock = styled(Store)``

const Text = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`
