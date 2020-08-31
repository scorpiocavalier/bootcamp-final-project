import React from 'react'
import styled from 'styled-components'

import { ProductList } from './ProductList'

export const Products = () => {
	return (
		<MainWrapper>
			<AllProducts>
				<SectionTitle>All Products</SectionTitle>
				<ProductList />
			</AllProducts>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Wrapper = styled(MainWrapper)`
	padding: 1rem;
	border: 2px solid #1c2260;
	margin-bottom: 1rem;
`

const AllProducts = styled(Wrapper)``

const SectionTitle = styled.h3`
	grid-area: title;
`