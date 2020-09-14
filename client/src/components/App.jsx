import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { Home } from './Content/Home'
import { Orders } from './Content/Orders'
import { Products } from './Content/Products'
import { InventoryCounter } from './Content/Products/InventoryCounter'
import { Customers } from './Content/Customers'
import { Analytics } from './Content/Analytics'
import { Settings } from './Content/Settings/'

export default () => (
	<Router>
		<Layout>
			<ContentSection>
				<Route exact path='/' component={Home} />
				<Route path='/orders' component={Orders} />
				<Route path='/products' component={Products} />
				<Route path='/inventory-counter' component={InventoryCounter} />
				<Route path='/customers' component={Customers} />
				<Route path='/analytics' component={Analytics} />
				<Route path='/settings' component={Settings} />
			</ContentSection>
		</Layout>
	</Router>
)

const ContentSection = styled.section`
	grid-area: content;
	width: 100%;
	height: 100%;
	padding: 2rem;
`
