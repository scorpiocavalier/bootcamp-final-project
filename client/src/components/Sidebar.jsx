import React from 'react'
import styled from 'styled-components';

import {
  HomeIcon,
  OrdersIcon,
  ProductsIcon,
  CustomersIcon,
  AnalyticsIcon,
} from './Icons'

export const Sidebar = () => {
  return (
		<List>
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
		</List>
	)
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  /* background: darkslateblue; */
  /* color: white; */
  /* border-bottom: 1px solid #ccc; */
`

const Span = styled.span`
  margin-left: 0.8rem;
`