import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

import { ProfileIcon } from '../Icons'

export const Profile = () => {
	const [isDropped, setIsDropped] = useState(false)
	const { user, isAuthenticated, loginWithPopup, logout } = useAuth0()

	console.log('useAuth0()', useAuth0())
	console.log('user', user)

	const handleLogin = () => loginWithPopup()
	const handleLogout = () => logout({ returnTo: window.location.origin })

	return (
		<>
			<Wrapper onClick={() => setIsDropped(!isDropped)}>
				{user ? (
					<Avatar src={user.picture} />
				) : (
					<ProfileIcon fill={'#fff'} size={'1.8rem'} />
				)}
			</Wrapper>

			{isDropped && (
				<DropdownSection>
					{!isAuthenticated && (
						<button onClick={handleLogin}>
							<DropdownAction>Log in</DropdownAction>
						</button>
					)}
					{isAuthenticated && (
						<>
							<Username>{user.name}</Username>
							<Email>{user.email}</Email>
							<button onClick={handleLogout}>
								<DropdownAction>Log out</DropdownAction>
							</button>
						</>
					)}
				</DropdownSection>
			)}
		</>
	)
}

const Wrapper = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		color: white;
		width: 100%;
		height: 100%;
	}
`

const DropdownSection = styled.ul`
	display: flex;
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

	&:hover {
		background: #b2b2b2;
	}
`

const Avatar = styled.img`
	width: 1.8rem;
	height: 1.8rem;
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
