import React from 'react'
import Card from './Card';

import styled from "styled-components";
export default function NewSlider({ movies }) {


  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

const moives2 = movies.slice(0,15);

  return (
    <Container>

<div className="scrollmenu">
   {moives2.map((movie, index) => {
              return <a><Card movieData={movie} index={index} key={movie.id} /></a>;
          })}

    </div>
     </Container>
  )
}
const Container = styled.div`







.scrollmenu {

  margin-top: -100px;

  overflow-x: auto;
 height: 350px;
 display: flex;
  padding-top: 40px;
  touch-action: auto;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
  height: 0px;                 
  background-color: transparent;
}
  
}

div.scrollmenu a {

  display: inline-block;
  padding-left: 14px;
 
  
}



`
