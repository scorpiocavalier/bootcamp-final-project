import React, { useState } from 'react'
import styled from 'styled-components'

import { Modal } from '../../Modal'
import { AddRemoveStores } from './AddRemoveStores'

export const Settings = () => {
	const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen)
	const onClose = () => setIsOpen(false)

	return (
		<MainWrapper>
			<Button onClick={toggleModal}>Add / Remove Stores</Button>
      <Modal title={'Add / Remove Stores'} isOpen={isOpen} onClose={onClose}>
				<AddRemoveStores />
			</Modal>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const Button = styled.button`
	padding: 0.8rem;
	margin-top: 10px;
	margin-right: 10px;
	border-radius: 5px;
	background: #43497e;
	color: white;
`
