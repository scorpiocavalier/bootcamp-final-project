import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../../../Context'
import { ButtonModal } from '../../Utilities/Modal/ButtonModal'
import { AddRemove } from './AddRemove'

export const Settings = () => {
	const {
		state: { stores, products },
		actions: [setStores, setProducts],
	} = useContext(Context)

	return (
		<MainWrapper>
			<ButtonModal title={'Add / Remove Stores'}>
				<AddRemove initialState={stores} setGlobal={setStores} />
			</ButtonModal>
			<ButtonModal title={'Add / Remove Products'}>
				<AddRemove initialState={products} setGlobal={setProducts} />
			</ButtonModal>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	justify-content: center;
`
