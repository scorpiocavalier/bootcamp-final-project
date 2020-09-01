import { gql } from '@apollo/client'

export const ADD_STORE = gql`
  mutation AddStore($location: String!) {
    addStore(store: {location: $location}) {
      location
    }
  }
`

export const UPDATE_STORE = gql`
  mutation UpdateStore($location: String!) {
    updateStore(store: {location: $location}) {
      location
    }
  }
`

export const DELETE_STORE = gql`
  mutation DeleteStore($location: String!) {
    deleteStore(location: $location) {
      location
    }
  }
`