import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider as PolarisProvider } from '@shopify/polaris'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'
import { ContextProvider } from './Context'

ReactDOM.render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH0_DOMAIN}
		clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
		redirectUri={window.location.origin}>
		<PolarisProvider>
			<ContextProvider>
				<App />
			</ContextProvider>
		</PolarisProvider>
	</Auth0Provider>,
	document.getElementById('root')
)
