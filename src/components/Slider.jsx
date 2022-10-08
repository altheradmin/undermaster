import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 7)} title="Novos Filmes" />
      <CardSlider data={getMoviesFromRange(7, 14)} title="Terror" />
      <CardSlider
        data={getMoviesFromRange(14, 21)}
        title="Mais Antigos"
      />
      <CardSlider
        data={getMoviesFromRange(21, 28)}
        title="Popular"
      />
  
    </Container>
  );
}

const Container = styled.div``;