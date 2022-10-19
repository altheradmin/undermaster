import React from 'react'
import Card from './Card';

import styled from "styled-components";
export default function NewSlider({ movies }) {


  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };


  const moives2 = movies.slice(0,7);
  const moives3 = movies.slice(7,14);
  const moives4 = movies.slice(14,21);
  const moives5 = movies.slice(21,28);


  return (
    
    <Container>
    <div className="fxDiv">  <h5 className="title">Novos Filmes</h5></div>
    
<div className="scrollmenu">
   {moives2.map((movie, index) => {
              return <a><Card movieData={movie} index={index} key={movie.id} /></a>;
          })}

    </div>



    <div className="fxDiv">  <h5 className="title2">Terror</h5></div>
    
    <div className="scrollmenu">
       {moives3.map((movie, index) => {
                  return <a><Card movieData={movie} index={index} key={movie.id} /></a>;
              })}
    
        </div>



        <div className="fxDiv">  <h5 className="title2">Mais Antigos</h5></div>
    
    <div className="scrollmenu">
       {moives4.map((movie, index) => {
                  return <a><Card movieData={movie} index={index} key={movie.id} /></a>;
              })}
    
        </div>
        <div className="fxDiv">  <h5 className="title2">Popular</h5></div>
    
    <div className="scrollmenu">
       {moives5.map((movie, index) => {
                  return <a><Card movieData={movie} index={index} key={movie.id} /></a>;
              })}
    
        </div>

     </Container>
  )
}
const Container = styled.div`
.title2{
  color: smokewhite;
  position: absolute;
  margin-left: 2em;
  margin-top: -5.5em;
 }

.title{
 color: smokewhite;
 position: absolute;
 margin-left: 2em;
 margin-top: -0.5em;

}




.scrollmenu {
  
  margin-top: -100px;
margin-left: 2vw;
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
  touch-action: auto;
  display: inline-block;
  padding-left: 14px;
 
  
}



`
