import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
max-width:70rem;
margin:2 rem auto;
text-align:center;


`;
const H1 = styled.h1`
font-family: Roboto;
margin-bottom:1em;
`;

export const Heading = () => {
    return (
        <div>
          <h1>Image Loader </h1>  
          <p></p>
        </div>
    )
}
