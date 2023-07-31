import React from 'react'
import Form from './Form'
import { StyledHeader } from './styles/Header.styled';

const Header = ({movieSearch}) => {
  return (
    <StyledHeader>

          <Form movieSearch={movieSearch} />

    </StyledHeader>
  )
}

export default Header