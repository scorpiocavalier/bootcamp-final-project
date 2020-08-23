import React from 'react'
import styled from 'styled-components';

import { SearchIcon } from '../Icons'

export const Searchbar = () => {
  return (
		<Wrapper>
			<SearchIcon fill={'#fff'} />
			<Input type="text" name="search" placeholder="Search" />
		</Wrapper>
  )
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 60%;
	padding: 0 10px;
	color: white;
	background: #43497e;
	border-radius: 5px;
`

const Input = styled.input`
	background: #43497e;
	width: 100%;
	height: 100%;
	border: none;
	color: #fff;
	margin-left: 10px;

	&::placeholder {
		color: #fff;
		font-size: 0.8rem;
	}

	&:focus {
		outline: none;
	}
`