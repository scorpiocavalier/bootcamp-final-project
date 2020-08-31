import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ProductList } from './ProductList'

export const Products = () => {
	return (
		<MainWrapper>
			<AllProducts>
				<SectionTitle>All Products</SectionTitle>
				<ProductList />
			</AllProducts>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Wrapper = styled(MainWrapper)`
	padding: 1rem;
	border: 2px solid #1c2260;
	margin-bottom: 1rem;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
`

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		display: grid;
		grid-template-areas: 'input-item-code input-price input-name';
	}
`

const ProductInfoWrapper = styled(InputWrapper)``
const ProductStockWrapper = styled(InputWrapper)``

const Input = styled.input`
	min-width: 100px;
	height: 2rem;
	margin: 10px 10px 10px 0;
	padding: 0 5px;
`

const InputItemCode = styled(Input)`
	grid-area: input-item-code;
`

const InputPrice = styled(Input)`
	grid-area: input-price;
`

const InputName = styled(Input)`
	grid-area: input-name;
`

const Button = styled.button`
	border: 2px solid #1c2260;
	width: 200px;
	padding: 5px 10px;
	margin-top: 10px;

	@media (min-width: 1024px) {
		margin: 10px 0;
	}
`

const AllProducts = styled(Wrapper)``

const SectionTitle = styled.h3`
	grid-area: title;
`

// const [products, setProducts] = useState([])

// const nameRef = useRef()
// const itemCodeRef = useRef()
// const priceRef = useRef()
// const storeRef_1 = useRef()
// const storeRef_2 = useRef()
// const storeRef_3 = useRef()
// const storeRef_4 = useRef()

// const submitHandler = e => {
// 	// e.preventDefault()

// 	const name = nameRef.current.value
// 	const itemCode = itemCodeRef.current.value
// 	const price = Number(priceRef.current.value)
// 	const store_1 = Number(storeRef_1.current.value)
// 	const store_2 = Number(storeRef_2.current.value)
// 	const store_3 = Number(storeRef_3.current.value)
// 	const store_4 = Number(storeRef_4.current.value)

// 	const requestBody = {
// 		query: `
//       mutation {
//         addProduct(productInput: {
//           name: "${name}",
//           itemCode: "${itemCode}",
// 					price: ${price},
// 					stock: [
// 						${store_1},
// 						${store_2},
// 						${store_3},
// 						${store_4},
// 					]
//         }) {
//           name
//           itemCode
//           price
//         }
//       }
//     `,
// 	}

// 	fetch('http://localhost:4000/graphql', {
// 		method: 'POST',
// 		body: JSON.stringify(requestBody),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 		.then(res => res.json())
// 		.then(data => console.log('data', data))
// }

// useEffect(() => {
// 	const requestBody = {
// 		query: `
//       query {
//         products {
//           name
//           itemCode
// 					price
// 					stock
//         }
//       }
//     `,
// 	}

// 	fetch('http://localhost:4000/graphql', {
// 		method: 'POST',
// 		body: JSON.stringify(requestBody),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 		.then(res => res.json())
// 		.then(data => setProducts(data.data.products))
// }, [setProducts])

			{
				/* <Wrapper>
				<Form onSubmit={e => console.log('onSubmit')}>
					<h3>Product Info</h3>
					<ProductInfoWrapper>
						<InputItemCode
							type='text'
							name='itemCode'
							placeholder='Item Code'
							ref={itemCodeRef}
						/>
						<InputPrice
							type='text'
							name='price'
							placeholder='Price'
							ref={priceRef}
						/>
						<InputName
							type='text'
							name='name'
							placeholder='Name'
							ref={nameRef}
						/>
					</ProductInfoWrapper>
					<h3>Product Stock</h3>
					<ProductStockWrapper>
						<Input
							type='text'
							name='name'
							placeholder={`${stores[0]} Store Stock`}
							ref={storeRef_1}
						/>
						<Input
							type='text'
							name='name'
							placeholder={`${stores[1]} Store Stock`}
							ref={storeRef_2}
						/>
						<Input
							type='text'
							name='name'
							placeholder={`${stores[2]} Store Stock`}
							ref={storeRef_3}
						/>
						<Input
							type='text'
							name='name'
							placeholder={`${stores[3]} Store Stock`}
							ref={storeRef_4}
						/>
					</ProductStockWrapper>
					<Button type='submit'>Add to Database</Button>
				</Form>
			</Wrapper> */
			}