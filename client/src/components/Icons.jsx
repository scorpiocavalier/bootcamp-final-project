import React from 'react'
import { Icon } from '@shopify/polaris'
import {
	StoreMajorMonotone,
	HomeMajorMonotone,
	OrdersMajorMonotone,
	ProductsMajorMonotone,
	CustomersMajorMonotone,
	AnalyticsMajorMonotone,
} from '@shopify/polaris-icons'
import styled from 'styled-components'

export const StoreIcon = ({fill}) => (
	<StyledSpan fill={fill}>
		<StyledSVG source={StoreMajorMonotone} />
	</StyledSpan>
)

export const HomeIcon = ({fill}) => (
	<StyledSpan fill={fill}>
		<StyledSVG source={HomeMajorMonotone} />
	</StyledSpan>
)

export const OrdersIcon = ({fill}) => (
	<StyledSpan fill={fill}>
		<StyledSVG source={OrdersMajorMonotone} />
	</StyledSpan>
)

export const ProductsIcon = ({fill}) => (
	<StyledSpan fill={fill}>
		<StyledSVG source={ProductsMajorMonotone} />
	</StyledSpan>
)

export const CustomersIcon = ({fill}) => (
	<StyledSpan fill={fill}>
		<StyledSVG source={CustomersMajorMonotone} />
	</StyledSpan>
)

export const AnalyticsIcon = ({fill}) => (
	<StyledSpan fill={fill}>
		<StyledSVG source={AnalyticsMajorMonotone} />
	</StyledSpan>
)

const StyledSpan = styled.span`
	display: block;
	height: 1.2rem;
	width: 1.2rem;
	max-height: 100%;
	max-width: 100%;
	fill: ${p => p.fill && p.fill};
`

const StyledSVG = styled(Icon)`
	position: relative;
	display: block;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
`
