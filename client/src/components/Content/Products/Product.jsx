import React from 'react'
import styled from 'styled-components'

export const Product = ( { product, stores } ) => {
	return (
		<ProductWrapper>
			<HeadersOne>
				<HeaderItemCode>Item Code</HeaderItemCode>
				<HeaderName>Name</HeaderName>
				<HeaderPrice>Price</HeaderPrice>
			</HeadersOne>

			<ItemOne>
				<ItemCode>{product.itemCode}</ItemCode>
				<Name>{product.name}</Name>
				<Price>$ {product.price}</Price>
			</ItemOne>

			<HeadersTwo>
				{stores.map((store, index) => (
					<HeaderStore key={index}>{store.location}</HeaderStore>
				))}
			</HeadersTwo>

      <ItemTwo>
        {/* TODO: StoreStock */}
				{stores.map((store, index) => (
					<Store key={store + index}>{index}</Store>
				))}
			</ItemTwo>
		</ProductWrapper>
	)
}

const ProductWrapper = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr;
	grid-template-areas:
		'headers-1'
		'item-1'
		'headers-2'
		'item-2';
	margin: 1rem auto;
	border: 2px solid #1c2260;

	@media (min-width: 1024px) {
		grid-template-columns: min-max(1fr) 1fr;
		grid-template-areas:
			'headers-1 headers-2'
			'item-1 item-2';
	}
`

const Headers = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px;
	background: #43497e;
	color: white;

	@media (min-width: 1024px) {
		justify-content: flex-start;
	}
`

const HeadersOne = styled(Headers)`
	grid-area: headers-1;
	display: grid;
	grid-template-columns: minmax(120px, 1fr) minmax(200px, 10fr) minmax(
			120px,
			1fr
		);
	grid-template-areas: 'header-item-code header-name header-price';
`

const HeadersTwo = styled(Headers)`
	grid-area: headers-2;
`

const HeaderItemCode = styled(Headers)`
	grid-area: header-item-code;
`

const HeaderName = styled(Headers)`
	grid-area: header-name;
`

const HeaderPrice = styled(Headers)`
	grid-area: header-price;
`

const HeaderStore = styled(Headers)`
	min-width: 110px;
	justify-content: center;

	@media (min-width: 1024px) {
		justify-content: center;
	}
`

const Item = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px;
	background: #f4f6f8;
	color: black;

	@media (min-width: 1024px) {
		justify-content: flex-start;
	}
`

const ItemOne = styled(Item)`
	grid-area: item-1;
	display: grid;
	grid-template-columns: minmax(120px, 1fr) minmax(200px, 10fr) minmax(
			120px,
			1fr
		);
	grid-template-areas: 'item-code name price';
`

const ItemTwo = styled(Item)`
	grid-area: item-2;
`

const ItemCode = styled(Item)`
	grid-area: item-code;
`

const Name = styled(Item)`
	grid-area: name;
`

const Price = styled(Item)`
	grid-area: price;
`

const Store = styled(Item)`
	min-width: 110px;
	justify-content: center;

	@media (min-width: 1024px) {
		justify-content: center;
	}
`