import React from 'react'
import styled from 'styled-components';

import { SearchIcon } from '../Icons'

export const Searchbar = () => {
  return (
		<SearchSection>
			<SearchIcon fill={'#fff'} />
			<Input type='text' name='search' placeholder='Search' />
		</SearchSection>
	)
}

const SearchSection = styled.section`
	grid-area: search;
	display: flex;
	align-items: center;
	width: 100%;
	height: 60%;
	padding: 0 10px;
	margin: auto 0;
	border-radius: 5px;
	background: #43497e;
`

const Input = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	margin-left: 10px;
	color: white;
	background: #43497e;

	&::placeholder {
		color: #fff;
		font-size: 0.8rem;
	}

	&:focus {
		outline: none;
	}
`