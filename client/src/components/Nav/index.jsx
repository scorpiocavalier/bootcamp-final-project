import React from 'react'
import styled from 'styled-components'

import { Menu } from './Menu'
import { Searchbar } from './Searchbar'
import { Profile } from './Profile'

export const Nav = () => (
	<NavSection>
		<Menu />
		<Searchbar />
		<Profile />
	</NavSection>
)

const NavSection = styled.nav`
	grid-area: nav;
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 0.5fr 2fr 0.5fr;
	grid-template-areas: 'menu search profile';
	background: #1c2260;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 2.5fr 0.5fr;
	}

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 3.5fr 0.5fr;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 1fr 4.5fr 0.5fr;
	}
`
