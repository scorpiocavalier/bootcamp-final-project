import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { StoreIcon } from '../Icons'

export const Menu = () => {
	const [isDropped, setIsDropped] = useState(false)
	const toggleMenu = () => setIsDropped(!isDropped)

	return (
		<MenuSection>
			<Brand>
				<StoreIcon fill={'#fff'} size={'1.5rem'} />
				<BrandName>Simplify</BrandName>
			</Brand>
			<Burger onClick={toggleMenu}>
				<BurgerLine1 isDropped={isDropped} />
				<BurgerLine2 isDropped={isDropped} />
				<BurgerLine3 isDropped={isDropped} />
			</Burger>
			<Dropdown onClick={toggleMenu} isDropped={isDropped}>
				<DropdownLink to='/'>Home</DropdownLink>
				<DropdownLink to='/orders'>Orders</DropdownLink>
				<DropdownLink to='/products'>Products</DropdownLink>
				<DropdownLink to='/customers'>Customers</DropdownLink>
				<DropdownLink to='/analytics'>Analytics</DropdownLink>
			</Dropdown>
		</MenuSection>
	)
}

const MenuSection = styled.section`
	grid-area: menu;

	@media (min-width: 768px) {
		width: 100%;
		height: 100%;
		padding-left: 2rem;
	}
`

const Brand = styled.span`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		height: 100%;
		font-size: 1.2rem;
		color: white;
	}
`

const BrandName = styled.span`
	margin-left: 0.8rem;
`

const Burger = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
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
	transform: ${p => p.isDropped && 'rotate(45deg)'};
`

const BurgerLine2 = styled(BurgerLine)`
	transform: ${p => p.isDropped && 'translateX(-200%)'};
	opacity: ${p => (p.isDropped ? 0 : 1)};
`

const BurgerLine3 = styled(BurgerLine)`
	transform-origin: bottom left;
	transform: ${p => p.isDropped && 'rotate(-45deg)'};
`

const Dropdown = styled.div`
	display: ${p => (p.isDropped ? 'flex' : 'none')};
	flex-direction: column;
	position: absolute;
	top: 8vh;
	width: 100%;
	background: rgba(28, 34, 96, 0.8);
	opacity: ${p => (p.isDropped ? 1 : 0)};
	transition: all 0.2s linear;

	@media (min-width: 768px) {
		display: none;
	}
`

const DropdownLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 8vh;
	width: 100%;
	color: #fff;
	font-size: 18px;

	&:active,
	&:visited {
		color: #fff;
	}
	&:hover {
		background: rgba(28, 34, 96, 0.8);
	}
`
