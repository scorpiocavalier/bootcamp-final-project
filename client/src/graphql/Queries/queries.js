import { gql } from '@apollo/client'

export const GET_STORES_AND_PRODUCTS = gql`
  query {
    stores {
      location
    }
    products {
      name
      itemCode
      description
      price
    }
  }
`