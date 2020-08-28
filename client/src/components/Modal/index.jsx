import React from 'react'
import styled from 'styled-components'
import ReactDom from 'react-dom'

import { CloseIcon } from '../Icons'

export const Modal = ({ children, title, isOpen, onClose }) => {
	if (!isOpen) return null

	return ReactDom.createPortal(
		<>
			<Overlay onClick={onClose} />
			<ModalWrapper>
				<IconWrapper onClick={onClose}>
					<CloseIcon fill={'#1c2260'} size={'2.3rem'} />
				</IconWrapper>
				<Title>{title}</Title>
				<ContentWrapper>{children}</ContentWrapper>
			</ModalWrapper>
		</>,
		document.getElementById('portal')
	)
}

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 10;
`

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	background: #f4f6f8;
	border-radius: 15px;
`

const IconWrapper = styled.div`
	position: absolute;
	top: -10px;
	right: -10px;
	background: #f4f6f8;
	border-radius: 50%;

	&:hover {
		cursor: pointer;
	}
`

const ContentWrapper = styled.div`
	padding: 20px;
`

const Title = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 20px 10px;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	background: #1c2260;
	color: white;
`
