import React from 'react'
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <List>
      <StyledLink>Home</StyledLink>
      <StyledLink>Orders</StyledLink>
      <StyledLink>Products</StyledLink>
      <StyledLink>Customers</StyledLink>
      <StyledLink>Analytics</StyledLink>
    </List>
  )
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const StyledLink = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  background: darkslateblue;
  color: white;
  border-bottom: 1px solid #ccc;
`