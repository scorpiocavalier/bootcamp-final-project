import React, { useState } from 'react'
import styled from 'styled-components'

export const Product = ({ product, stores }) => {
	const [open, setOpen] = useState(false)
	const [editPlaceholder, setEditPlaceholder] = useState('Edit')
	const [deletePlaceholder, setDeletePlaceholder] = useState('Delete')

	const toggle = () => setOpen(!open)

	const showEditModal = () => {

	}

	const editProduct = () => {
		switch ( editPlaceholder ) {
			case 'Edit':
				showEditModal()
				setEditPlaceholder('Save')
				setDeletePlaceholder('Cancel')
				break
			case 'Confirm':
				// call dispatch
				break
			default: return
		}
	}

	const deleteProduct = () => {
		switch (deletePlaceholder) {
			case 'Delete':
				setEditPlaceholder('Confirm')
				setDeletePlaceholder('Cancel')
				break
			case 'Cancel':
				setEditPlaceholder('Edit')
				setDeletePlaceholder( 'Delete' )
				break
			default: return
		}
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

			<ItemDetails open={open}>
				<DescriptionWrapper>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
						exercitationem! Odio ab vero blanditiis dolores et, ducimus ullam
						nam quam consequuntur eveniet vel aspernatur placeat at ut
						architecto vitae optio.
					</Description>

					<EditDelete>
						<Button
							color={'#43497e'}
							hoverColor={'darkgreen'}
							onClick={editProduct}>
							{editPlaceholder}
						</Button>
						<Button
							color={'#43497e'}
							hoverColor={'darkred'}
							onClick={deleteProduct}>
							{deletePlaceholder}
						</Button>
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
	max-height: ${p => (p.open ? '500px' : '0')};
	opacity: ${p => (p.open ? '1' : '0')};
	overflow-y: hidden;
	transition: all 0.5s ease;
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
	padding-bottom: ${p => (p.open ? '10px' : '0')};
`

const DescriptionWrapper = styled.div`
	display: flex;
	padding: 0 10px;
`

const Description = styled.p`
	padding: 10px 0;
`

const EditDelete = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5px 0;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`

const Button = styled.button`
	margin: 5px 0 5px 10px;
	width: 5rem;
	height: 2rem;
	padding: 5px 15px;
	background: ${p => p.color};
	color: white;

	&:hover {
		background: ${p => p.hoverColor};
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
