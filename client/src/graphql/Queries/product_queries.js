import { gql } from '@apollo/client'

export const getStores = gql`
  query {
    stores {
      location
    }
  }
`

export const GET_PRODUCTS = gql`
  query {
    products {
      name
      itemCode
      description
      price
    }
  }
`

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

// export const getStore = gql`
//   query {
//     store(location) {
//       location
//     }
//   }
// `

// export const getProduct = gql`
//   query {
//     product(itemCode) {
//       name
//       itemCode
//       price
//     }
//   }
// `