import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { Home } from './Content/Home'
import { Orders } from './Content/Orders'
import { Products } from './Content/Products'
import { Customers } from './Content/Customers'
import { Analytics } from './Content/Analytics'
import { Settings } from './Content/Settings/'

export default () => (
	<Router>
		<Layout>
			<ContentSection>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/orders'>
					<Orders />
				</Route>
				<Route exact path='/products'>
					<Products />
				</Route>
				<Route exact path='/customers'>
					<Customers />
				</Route>
				<Route exact path='/analytics'>
					<Analytics />
				</Route>
				<Route exact path='/settings'>
					<Settings />
				</Route>
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
