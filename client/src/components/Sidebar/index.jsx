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
			<ListItem>
				<HomeIcon />
				<Span>
					<Link to='/'>
						Home
					</Link>
				</Span>
			</ListItem>
			<ListItem>
				<OrdersIcon />
				<Span>
					<Link to='orders'>
						Orders
					</Link>
				</Span>
			</ListItem>
			<ListItem>
				<ProductsIcon />
				<Span>
					<Link to='products'>
						Products
					</Link>
				</Span>
			</ListItem>
			<ListItem>
				<CustomersIcon />
				<Span>
					<Link to='customers'>
						Customers
					</Link>
				</Span>
			</ListItem>
			<ListItem>
				<AnalyticsIcon />
				<Span>
					<Link to='analytics'>
						Analytics
					</Link>
				</Span>
			</ListItem>
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
	padding-left: 2rem;
`

const Span = styled.span`
	margin-left: 0.8rem;
`
