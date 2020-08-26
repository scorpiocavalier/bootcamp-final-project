import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
	HomeIcon,
	OrdersIcon,
	ProductsIcon,
	CustomersIcon,
	AnalyticsIcon,
} from '../Icons'

export const Sidebar = () => {
	return (
		<SidebarSection>
			<Link to='/'>
				<ListItem>
					<HomeIcon />
					<Title>Home</Title>
				</ListItem>
			</Link>
			<Link to='orders'>
				<ListItem>
					<OrdersIcon />
					<Title>Orders</Title>
				</ListItem>
			</Link>
			<Link to='products'>
				<ListItem>
					<ProductsIcon />
					<Title>Products</Title>
				</ListItem>
			</Link>
			<Link to='customers'>
				<ListItem>
					<CustomersIcon />
					<Title>Customers</Title>
				</ListItem>
			</Link>
			<Link to='analytics'>
				<ListItem>
					<AnalyticsIcon />
					<Title>Analytics</Title>
				</ListItem>
			</Link>
		</SidebarSection>
	)
}

const SidebarSection = styled.ul`
	grid-area: sidebar;
	display: none;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		padding-top: 1rem;
		width: 100%;
		height: 100%;
		border-right: 2px solid #ccc;
	}
`

const ListItem = styled.li`
	display: flex;
	align-items: center;
	height: 50px;
	padding: 0 1rem;
`

const Title = styled.span`
	display: none;

	@media (max-width: 1024px) {
		display: flex;
		margin-left: 0.8rem;
	}

	@media (min-width: 1130px) {
		display: flex;
		margin-left: 0.8rem;
	}
`
