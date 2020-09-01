import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import { GET_STORES } from '../../../graphql/Queries/store_queries'
import { ButtonModal } from '../../Utilities/Modal/ButtonModal'
import { AddRemove } from './AddRemove'

export const Settings = () => {
	const { loading, error, data } = useQuery(GET_STORES)

	if (loading) {
		console.log('Loading...')
		return <p>Loading...</p>
	}

	if (error) {
		console.log('Error with useQuery(getStoresAndProducts)')
		return <p>Error</p>
	}

	// Destructuring only after it passes loading and error
	const { stores } = data
	// console.log('stores', stores)

	return (
		<MainWrapper>
			<ButtonModal title={'Add / Remove Stores'}>
				<AddRemove initialState={[...stores]} />
			</ButtonModal>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	justify-content: center;
`
