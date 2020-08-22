import React from 'react'
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
} from '@shopify/polaris-icons'
import styled from 'styled-components'

export const StoreIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={StoreMajorMonotone} />
	</Span>
)

export const SearchIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={SearchMajorMonotone} />
	</Span>
)

export const CancelIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={CircleCancelMinor} />
	</Span>
)

export const ProfileIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={ProfileMajorMonotone} />
	</Span>
)

export const HomeIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={HomeMajorMonotone} />
	</Span>
)

export const OrdersIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={OrdersMajorMonotone} />
	</Span>
)

export const ProductsIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={ProductsMajorMonotone} />
	</Span>
)

export const CustomersIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={CustomersMajorMonotone} />
	</Span>
)

export const AnalyticsIcon = ({ fill, size }) => (
	<Span fill={fill} size={size}>
		<SVG source={AnalyticsMajorMonotone} />
	</Span>
)

const Span = styled.span`
	display: block;
	width: ${({ size }) => (size ? size : '1.2rem')};
	height: ${({ size }) => (size ? size : '1.2rem')};
	max-width: 100%;
	max-height: 100%;
	fill: ${({ fill }) => fill && fill};
`

const SVG = styled(Icon)`
	position: relative;
	display: block;
	max-width: 100%;
	max-height: 100%;
`
