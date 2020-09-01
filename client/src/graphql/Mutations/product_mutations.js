import { gql } from '@apollo/client'

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $itemCode: String!, $description: String!, $price: Float!) {
    addProduct(product: {name: $name, itemCode: $itemCode, description: $description, price: $price}) {
      name
      itemCode
      description
      price
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($name: String!, $itemCode: String!, $description: String!, $price: Float!) {
    updateProduct(product: {name: $name, itemCode: $itemCode, description: $description, price: $price}) {
      name
      itemCode
      description
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