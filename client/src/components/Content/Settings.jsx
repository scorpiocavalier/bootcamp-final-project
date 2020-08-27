import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../../Context'

export const Settings = () => {
	const { state, dispatch } = useContext(Context)

  console.log('state', state)

  const addStoreInput = () => console.log('state', state)

	return (
		<MainWrapper>
			<StoreSettings>
				<Button onClick={addStoreInput}>Add a store</Button>
			</StoreSettings>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: grid;
`

const StoreSettings = styled.section`
	display: fled;
`

const Button = styled.button`
	padding: 0.8rem;
	border-radius: 5px;
	background: #43497e;
	color: white;
`
