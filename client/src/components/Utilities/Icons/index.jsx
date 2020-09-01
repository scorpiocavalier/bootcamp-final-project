import React from 'react'
import styled from 'styled-components'
import { Icon } from '@shopify/polaris'
import {
	StoreMajorMonotone,
	SearchMajorMonotone,
	CircleCancelMinor,
	ProfileMajorMonotone,
	HomeMajorMonotone,
	OrdersMajorMonotone,
	ProductsMajorMonotone,
	CustomersMajorMonotone,
	AnalyticsMajorMonotone,
	SettingsMajorMonotone,
	DeleteMajorMonotone,
	CircleTickMajorMonotone,
	CircleCancelMajorMonotone,
} from '@shopify/polaris-icons'

const StyledIcon = ({ fill, size, source }) => (
	<Span fill={fill} size={size}>
		<Icon source={source} />
	</Span>
)

export const StoreIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={StoreMajorMonotone} />
)

export const SearchIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={SearchMajorMonotone} />
)

export const CancelIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={CircleCancelMinor} />
)

export const ProfileIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={ProfileMajorMonotone} />
)

export const HomeIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={HomeMajorMonotone} />
)

export const OrdersIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={OrdersMajorMonotone} />
)

export const ProductsIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={ProductsMajorMonotone} />
)

export const CustomersIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={CustomersMajorMonotone} />
)

export const AnalyticsIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={AnalyticsMajorMonotone} />
)

export const SettingsIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={SettingsMajorMonotone} />
)

export const DeleteIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={DeleteMajorMonotone} />
)

export const AcceptIcon = ({ fill, size }) => (
	<StyledIcon fill={fill} size={size} source={CircleTickMajorMonotone} />
)

export const CloseIcon = ( { fill, size } ) => (
	<StyledIcon fill={fill} size={size} source={CircleCancelMajorMonotone} />
)

const Span = styled.span`
	display: block;
	width: ${({ size }) => (size ? size : '1.5rem')};
	height: ${({ size }) => (size ? size : '1.5rem')};
	fill: ${({ fill }) => fill};
`