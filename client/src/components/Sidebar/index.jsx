import React from 'react'
import styled from 'styled-components';

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
				<Span>Home</Span>
			</ListItem>
			<ListItem>
				<OrdersIcon />
				<Span>Orders</Span>
			</ListItem>
			<ListItem>
				<ProductsIcon />
				<Span>Products</Span>
			</ListItem>
			<ListItem>
				<CustomersIcon />
				<Span>Customers</Span>
			</ListItem>
			<ListItem>
				<AnalyticsIcon />
				<Span>Analytics</Span>
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