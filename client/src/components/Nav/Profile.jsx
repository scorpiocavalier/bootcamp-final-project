import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

import { ProfileIcon } from '../Icons'

export const Profile = () => {
	const [isDropped, setIsDropped] = useState(false)
	const { user, loginWithPopup, logout } = useAuth0()

	const toggle = () => setIsDropped(!isDropped)
	const handleLogin = () => loginWithPopup()
	const handleLogout = () => logout({ returnTo: window.location.origin })

	return (
		<ProfileSection>
			{user ? (
				<>
					<DropdownTrigger onClick={toggle}>
						<Avatar src={user.picture} size={'1.8rem'} />
					</DropdownTrigger>

					<Dropdown isDropped={isDropped}>
						<Username>{user.name}</Username>
						<Email>{user.email}</Email>
						<DropdownAction onClick={handleLogout}>Log out</DropdownAction>
					</Dropdown>
				</>
			) : (
				<>
					<DropdownTrigger onClick={toggle}>
						<ProfileIcon fill={'#fff'} size={'1.8rem'} />
					</DropdownTrigger>

					<Dropdown isDropped={isDropped}>
						<DropdownAction onClick={handleLogin}>Log in</DropdownAction>
					</Dropdown>
				</>
			)}
		</ProfileSection>
	)
}

const ProfileSection = styled.section`
	grid-area: profile;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const DropdownTrigger = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	width: 100%;
	height: 100%;
`

const Dropdown = styled.ul`
	display: ${p => (p.isDropped ? 'flex' : 'none')};
	flex-direction: column;
	position: absolute;
	top: 7vh;
	right: 25px;
	min-width: 100px;
	border-radius: 5px;
	background: #f4f6f8;
	box-shadow: 1px 1px 2px 1px #b2b2b2;
	z-index: 10;
`

const DropdownAction = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 10px 0;
	border-radius: 5px;
	font-size: 0.9rem;
	background: #f4f6f8;

	&:hover {
		background: #b2b2b2;
	}
`

const Avatar = styled.img`
	width: ${p => p.size};
	height: ${p => p.size};
	border-radius: 50%;
`

const Username = styled.span`
	font-size: 1rem;
	padding: 20px 20px 0 20px;
	text-align: center;
`

const Email = styled.span`
	font-size: 0.8rem;
	padding: 10px 20px 20px 20px;
	text-align: center;
`
