import React from 'react'
import styled from 'styled-components';

import { SearchIcon } from '../Icons'

export const Searchbar = () => {
  return (
		<Wrapper>
			<Input type="text" name="search" placeholder="Search" />
		</Wrapper>
  )
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 80%;
	color: white;
	background: #43497e;
`

const Input = styled.input`
	background: #43497e;
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 3px;
	padding: 0 10px;
`