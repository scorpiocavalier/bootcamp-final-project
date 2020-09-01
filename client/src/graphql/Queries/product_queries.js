import { gql } from '@apollo/client'

// export const getStore = gql`
//   query {
//     store(location) {
//       location
//     }
//   }
// `

export const getStores = gql`
  query {
    stores {
      location
    }
  }
`

// export const getProduct = gql`
//   query {
//     product(itemCode) {
//       name
//       itemCode
//       price
//     }
//   }
// `

export const getProducts = gql`
  query {
    products {
      name
      itemCode
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
      price
    }
  }
`