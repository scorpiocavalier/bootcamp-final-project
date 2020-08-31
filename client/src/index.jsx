import React from 'react'
import { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { AppProvider as PolarisProvider } from '@shopify/polaris'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import App from './components/App'
import { ContextProvider } from './Context'

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
})

render(
	<ApolloProvider client={client}>
		<Auth0Provider
			domain={process.env.REACT_APP_AUTH0_DOMAIN}
			clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
			redirectUri={window.location.origin}>
			<PolarisProvider>
				<ContextProvider>
					<App />
				</ContextProvider>
			</PolarisProvider>
		</Auth0Provider>
	</ApolloProvider>,
	document.getElementById('root')
)
