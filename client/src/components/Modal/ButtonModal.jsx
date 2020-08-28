import React, { useState } from 'react'
import styled from 'styled-components'

import { Modal } from './index'

export const ButtonModal = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => setIsOpen(!isOpen)
	const onClose = () => setIsOpen(false)

	return (
		<Wrapper>
			<Button onClick={toggleModal}>{title}</Button>
			<Modal title={title} isOpen={isOpen} onClose={onClose}>
				{children}
			</Modal>
		</Wrapper>
	)
}

const Wrapper = styled.div``

const Button = styled.button`
	padding: 0.8rem;
	margin-top: 10px;
	margin-right: 10px;
	border-radius: 5px;
	background: #43497e;
	color: white;

	&:hover {
		background: #1c2260;
	}
`
