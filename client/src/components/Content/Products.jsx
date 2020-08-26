import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

export const Products = () => {
	const [products, setProducts] = useState([])

	const nameRef = useRef()
	const itemCodeRef = useRef()
	const priceRef = useRef()

	const submitHandler = e => {
		e.preventDefault()

		const name = nameRef.current.value
		const itemCode = itemCodeRef.current.value
		const price = Number(priceRef.current.value)

		const requestBody = {
			query: `
        mutation {
          addProduct(productInput: {
            name: "${name}",
            itemCode: "${itemCode}",
            price: ${price}
          }) {
            name
            itemCode
            price
          }
        }
      `,
		}

		fetch('http://localhost:4000/graphql', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => console.log('data', data))
	}

	useEffect(() => {
		const requestBody = {
			query: `
        query {
          products {
            name
            itemCode
            price
          }
        }
      `,
		}

		fetch('http://localhost:4000/graphql', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => setProducts(data.data.products))
	}, [setProducts])

	console.log('products', products)

	return (
		<MainWrapper>
			<Wrapper>
				<form onSubmit={e => submitHandler(e)}>
					<Input type='text' name='name' placeholder='Name' ref={nameRef} />
					<Input
						type='text'
						name='itemCode'
						placeholder='Item Code'
						ref={itemCodeRef}
					/>
					<Input type='text' name='price' placeholder='Price' ref={priceRef} />
					<Button type='submit'>Add to Database</Button>
				</form>
			</Wrapper>
			<Wrapper>
				<h3>All Products</h3>
				<ul>
					{products.map(product => (
						<ProductWrapper>
							<li>Name: {product.name}</li>
							<li>Item Code: {product.itemCode}</li>
							<li>Price: $ {product.price}</li>
						</ProductWrapper>
					))}
				</ul>
			</Wrapper>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Wrapper = styled(MainWrapper)`
	padding: 10px;
	border: 1px solid #1c2260;
`

const Input = styled.input`
	height: 2rem;
	margin-right: 10px;
	padding: 0 5px;
`

const Button = styled.button`
	border: 2px solid #1c2260;
	padding: 5px 10px;
`

const ProductWrapper = styled.div`
  padding: 10px 0;
`