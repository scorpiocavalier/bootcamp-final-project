import React from 'react'
import styled from 'styled-components'

import { Menu } from './Menu'
import { Searchbar } from './Searchbar'
import { Profile } from './Profile'

export const Nav = () => {
	return (
		<Navbar>
			<MenuSection>
				<Menu />
			</MenuSection>

			<SearchSection>
				<Searchbar />
			</SearchSection>
			
			<ProfileSection>
				<Profile />
			</ProfileSection>
		</Navbar>
	)
}

const Navbar = styled.nav`
	display: grid;
	grid: 100% / 1fr 5fr;
	grid-template-areas: 'menu search';
	height: 100%;
	width: 100%;
	background: #1c2260;

	@media (min-width: 768px) {
		grid: 100% / 1fr 2.5fr 0.5fr;
		grid-template-areas: 'menu search profile';
	}

	@media (min-width: 1024px) {
		grid: 100% / 1fr 3.5fr 0.5fr;
		grid-template-areas: 'menu search profile';
	}

	@media (min-width: 1440px) {
		grid: 100% / 1fr 4.5fr 0.5fr;
		grid-template-areas: 'menu search profile';
	}
`

const MenuSection = styled.section`
	grid-area: menu;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-left: 1rem;
	/* border: solid green; */

	@media (min-width: 768px) {
		padding-left: 2rem;
	}
`

const SearchSection = styled.section`
	grid-area: search;
	display: grid;
	align-items: center;
	width: 100%;
	padding: 0 1rem;
	/* border: solid red; */

	@media (min-width: 768px) {
		padding: 0;
	}
`

const ProfileSection = styled.section`
	grid-area: profile;
	display: none;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-right: 2rem;
	/* border: solid blue; */

	@media (min-width: 768px) {
		display: flex;
	}
`
