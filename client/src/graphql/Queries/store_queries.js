import { gql } from '@apollo/client'

export const GET_STORES = gql`
  query {
    stores {
      location
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
