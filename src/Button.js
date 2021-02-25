import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? 'teal' : 'aqua')};
  ${props => props.isActive && 'color: white;'}
  border: 1px solid black;
  width: 100%;
  padding: 5px;
  box-shadow: 0 4px 8px darkgrey;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  color: inherit;

  &.active {
    background-color: teal;
    color: white;
  }
`
