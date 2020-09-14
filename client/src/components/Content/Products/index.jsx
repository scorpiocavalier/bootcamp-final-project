import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { AddNewProduct } from './AddNewProduct'
import { ProductList } from './ProductList'

export const Products = () => {
	return (
		<MainWrapper>
			<Title>Inventory Tasks</Title>
			<TasksWrapper>
				<Link to='/inventory-counter'>
					<Task>Inventory Counter</Task>
				</Link>
			</TasksWrapper>
			<AddNewProduct />
			<AllProducts>All Products</AllProducts>
			<ProductList />
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const TasksWrapper = styled.div`
	display: flex;
`

const Title = styled.h3`
	grid-area: title;
	margin-bottom: 10px;
	text-align: center;
	font-size: 2rem;
	font-weight: 500;
`

const AllProducts = styled.h3`
	margin-top: 2rem;
	text-align: center;
	font-size: 2rem;
	font-weight: 500;
`

const Task = styled.div`
	padding: 10px 20px;
	background: #43497e;
	color: white;
	border-radius: 5px;

	&:hover {
		background: #1c2260;
	}
`