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

				<NavSection>
					<Nav />
				</NavSection>

				<SidebarSection>
					<Sidebar />
				</SidebarSection>

				<ContentSection>{children}</ContentSection>
			</Grid>
		</Router>
	)
}

const Grid = styled.div`
	display: grid;
	grid: 8vh 92vh / 1fr;
	grid-template-areas:
		'nav'
		'content';

	@media (min-width: 768px) {
		grid: 8vh 92vh / 1fr 3fr;
		grid-template-areas:
			'nav nav'
			'sidebar content';
	}

	@media (min-width: 1024px) {
		grid: 8vh 92vh / 1fr 4fr;
		grid-template-areas:
			'nav nav'
			'sidebar content';
	}

	@media (min-width: 1440px) {
		grid: 8vh 92vh / 1fr 5fr;
		grid-template-areas:
			'nav nav'
			'sidebar content';
	}
`

const NavSection = styled.section`
	grid-area: nav;
`

const SidebarSection = styled.section`
	grid-area: sidebar;
	border-right: 2px solid #ccc;
	display: none;

	@media (min-width: 768px) {
		display: flex;
	}
`

const ContentSection = styled.section`
	grid-area: content;
`
