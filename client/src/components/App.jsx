import React from 'react'
import styled from 'styled-components'

import { Layout } from './Layout'

export default () => (
	<Layout>
		<ContentSection>Content Area</ContentSection>
	</Layout>
)

const ContentSection = styled.section`
	grid-area: content;
	width: 100%;
	height: 100%;
	padding: 2rem;
`
