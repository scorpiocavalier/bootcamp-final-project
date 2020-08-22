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
	display: flex;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	padding: 0 1.2rem;
	background: #1c2260;
`

const MenuSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15%;
`

const SearchSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
`

const ProfileSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15%;
`