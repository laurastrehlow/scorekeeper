import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Button from './Button'


export default function Navigation() {
  return (
    <Nav>
      <Button as={NavLink} exact to="/">
        Create
      </Button>
      <Button as={NavLink} to="/history">
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`