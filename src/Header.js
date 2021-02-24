import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ text }) {
  return <Heading>{text}</Heading>
}

const Heading = styled.header`
    padding: 12px;
    text-align: center;
  `