///////////////////// Search photos component ///////////////////

import React from "react";
import styled from 'styled-components';
import { useState} from 'react';
import Unsplash, {toJson} from 'unsplash-js';


/////// access key /////////
const unsplash = new Unsplash({
  accessKey: '5iA_FL8TsamkyK6RPc1LnFQyWICUKvkY0_jvx2gZk_I'
});

///// Styling using styled-components /////////////
const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  margin-top: 1em;
  outline: none;
  text-indent: 1em;
  font-size: 1em;

  ::placeholder {
    font-size: .8em;
  }
`;

const Button = styled.button`
  height: 2.5rem;
  padding: 0 1em;
  outline: none;
  cursor: pointer;
  background: #222;
  border: none;
  color: #fff;
  font-size: 1em;
`;
const WrapperImages = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
`;
//////////////////////// end of styling ////////////////////


export default function Searchphotos() {

    /////// creating UseState to updtae the data /////////////
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    ///////// creating card to display the pics ///////////
    function Card(){
        return <>
          {pics.map((pic)=><div>
              <img alt={pic.alt_description}
                  src={pic.urls.full}
                  width="100%"
                  height="100%"></img>
          </div>)}
      </>
    }
    
    /////////////// fetching the images from unsplash api ////////////////
    
    const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
    .photos(query, 1, 20)
    .then(toJson)
    .then((json) => {
      setPics(json.results);
    });

  };
  return (
    <>
       <form onSubmit={searchPhotos}>
        <Input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search photos" />
        <Button type="submit" >Search</Button>
      </form>
      <WrapperImages><Card /></WrapperImages>
    </>
  );
}