import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import {
	getStoresAndProducts,
} from '../../../graphql/Queries/product_queries'

import { Product } from './Product'

export const ProductList = () => {
	const { loading, error, data } = useQuery(getStoresAndProducts)

	if (loading) {
		console.log('Loading...')
		return <p>Loading...</p>
	}

	if (error) {
		console.log('Error with useQuery(getStoresAndProducts)')
		return <p>Error</p>
	}

	// Keep for optimization opportunity
	console.count( 'ProductList' )

	// Destructuring only after it passes loading and error
	const { stores, products } = data

	return (
		<List>
			{data &&
				products.map((product, index) => {
					return <Product key={index} stores={stores} product={product} />
				})}
		</List>
	)
}

const List = styled.ul`
	grid-area: list;
`
