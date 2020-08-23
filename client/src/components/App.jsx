import React from 'react'
import styled from 'styled-components'

import { Layout } from './Layout'

export default () => (
	<Layout>
		<Content>Content Area</Content>
	</Layout>
)

const Content = styled.section`
	width: 100%;
	height: 100%;
	padding: 2rem;
`