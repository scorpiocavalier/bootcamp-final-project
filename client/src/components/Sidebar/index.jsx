import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
	HomeIcon,
	OrdersIcon,
	ProductsIcon,
	CustomersIcon,
	AnalyticsIcon,
	SettingsIcon,
} from '../Utilities/Icons/index'

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
			<Link to='settings'>
				<ListItem>
					<SettingsIcon />
					<Title>Settings</Title>
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
		padding: 1rem 0;
		width: 100%;
		min-height: 92vh;
		border-right: 2px solid #ccc;
	}
`

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 100%;

	@media (min-width: 1130px) {
		justify-content: flex-start;
		width: 130px;
		margin: 0 auto;
	}
`

const Title = styled.span`
	display: none;

	@media (min-width: 1130px) {
		display: flex;
		margin-left: 0.8rem;
	}
`
