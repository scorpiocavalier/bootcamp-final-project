import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from '@shopify/polaris'

import App from './components/App'

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
	document.getElementById('root')
)
