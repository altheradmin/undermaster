import React from 'react'
import styled from 'styled-components';
import Background from "../assets/login.jpg";


export default function BackgroundImage() {
  return (
    <Container>
    <img src={Background} alt="background"/>
    </Container>
  )
}
const Container = styled.div`
height: 100vh;


img {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

}
`;