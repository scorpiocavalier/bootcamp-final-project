import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from '../GlobalStyle'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }) => {
	return (
		<Router>
			<Grid>
				<GlobalStyle />
				<Nav />
				<Sidebar />
				{children}
			</Grid>
		</Router>
	)
}

const Grid = styled.div`
	display: grid;
	grid-template-rows: 8vh auto;
	grid-template-columns: 1fr;
	grid-template-areas:
		'nav'
		'content';

	@media (min-width: 768px) {
		grid-template-columns: 1fr 10fr;
		grid-template-areas:
			'nav nav'
			'sidebar content';
	}

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 4fr;
		grid-template-areas:
			'nav nav'
			'sidebar content';
	}

	@media (min-width: 1440px) {
		grid-template-columns: 1fr 5fr;
		grid-template-areas:
			'nav nav'
			'sidebar content';
	}
`