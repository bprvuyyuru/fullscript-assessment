//////////////// heading component //////////////////////

import React from 'react';
import styled from 'styled-components';
import Searchphotos from './Searchphotos';


////////// creating styles using styled-components ///////////////
const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;

/////////////////////// end of style /////////////////////////////


export const Heading = () => {

  return (
    <Header>
      <H1>Fullsplash</H1>
      <p>The internet’s source of freely usable images.</p>
      <Searchphotos />
    </Header>
  )
}