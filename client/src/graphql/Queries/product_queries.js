import { gql } from '@apollo/client'

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

// export const getProduct = gql`
//   query {
//     product(itemCode) {
//       name
//       itemCode
//       price
//     }
//   }
// `