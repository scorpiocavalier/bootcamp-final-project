import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Menu = () => {
	const [active, setActive] = useState(false)
	const toggleMenu = () => setActive(!active)
	const dropdownRef = useRef(null)
	// const { state } = useShopContext();
	// const { cart, currentUser, signedIn } = state;
	// useClickOutside(dropdownRef, setActive);

	return (
		<Wrapper ref={dropdownRef}>
			<BurgerMenu onClick={toggleMenu}>
				<BurgerLine1 active={active} />
				<BurgerLine2 active={active} />
				<BurgerLine3 active={active} />
			</BurgerMenu>
			<NavLinks onClick={toggleMenu} active={active}>
				<DropdownLink to='/'>Home</DropdownLink>
			</NavLinks>
			<Brand>Project</Brand>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const BurgerMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

	@media (min-width: 768px) {
		display: none;
	}
`

const BurgerLine = styled.div`
	width: 35px;
	height: 3px;
	margin: 4px;
	background: white;
	transition: transform 0.2s linear, opacity 0.1s linear;
`

const BurgerLine1 = styled(BurgerLine)`
	transform-origin: top left;
	transform: ${p => p.active && 'rotate(45deg)'};
`

const BurgerLine2 = styled(BurgerLine)`
	transform: ${p => p.active && 'translateX(-200%)'};
	opacity: ${p => (p.active ? 0 : 1)};
`

const BurgerLine3 = styled(BurgerLine)`
	transform-origin: bottom left;
	transform: ${p => p.active && 'rotate(-45deg)'};
`

const NavLinks = styled.div`
	display: ${p => (p.active ? 'flex' : 'none')};
	flex-direction: column;
	position: absolute;
	top: 8vh;
	left: 0;
	width: 100%;
	background: rgba(23, 25, 25, 0.5);
	opacity: ${p => (p.active ? 1 : 0)};
	transition: all 0.2s linear;

	@media (min-width: 768px) {
		display: none;
	}
`

const DropdownLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 100%;
	color: #fff;
	font-size: 18px;
	&:active,
	&:visited {
		color: #fff;
	}
	&:hover {
		background: rgba(25, 25, 25, 0.55);
	}

	@media (min-width: 768px) {
		display: none;
	}
`

const Brand = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 1.2rem;
	color: white;
`