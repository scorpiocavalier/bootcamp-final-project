import { gql } from '@apollo/client'

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $itemCode: String!, $price: Float!) {
    addProduct(product: {name: $name, itemCode: $itemCode, price: $price}) {
      name
      itemCode
      price
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($itemCode: String!) {
    deleteProduct(itemCode: $itemCode) {
      itemCode
    }
  }
`