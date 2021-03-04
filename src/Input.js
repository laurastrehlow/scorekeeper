import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label className="Input">
      {labelText}
      <InputAgain name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
    display: grid;
    gap: 4px;
    font-style: strong;
    text-align: center;
  }`

const InputAgain = styled.input`
  border: 1px solid darkslategrey;
  font-size: 12px;
  padding: 5px;
`
