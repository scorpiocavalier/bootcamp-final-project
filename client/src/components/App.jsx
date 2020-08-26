import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Layout } from './Layout'
import { Products } from './Content/Products'

export default () => (
	<Router>
		<Layout>
			<ContentSection>
				<Route exact path='/products'>
					<Products />
				</Route>
			</ContentSection>
		</Layout>
	</Router>
)

const ContentSection = styled.section`
	grid-area: content;
	width: 100%;
	height: 100%;
	padding: 1rem;
`
