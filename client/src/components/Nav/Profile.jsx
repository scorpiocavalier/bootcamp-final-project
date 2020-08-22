import React from 'react'
import styled from 'styled-components'

import { ProfileIcon } from '../Icons'

export const Profile = () => {
	return (
		<Wrapper>
			<ProfileIcon fill={'#fff'} size={"1.8rem"} />
		</Wrapper>
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
