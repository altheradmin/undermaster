import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar';
import BackgroundImage from '../assets/home.jpg';
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
import Footer from '../components/Footer';


export default function Underflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();  


  useEffect(() => {
    dispatch(getGenres());
  }, [])


  useEffect(() => {
 
      dispatch(fetchMovies({ type: "all" }));
    
  }, []);



window.onscroll =() => {
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => (window.onscroll = null);
}
console.log(movies);
  return (
    <Container>
   
      <NavBar isScrolled={isScrolled}/>
      <div className="hero">
        <img 
        src={BackgroundImage} 
        alt="Background"
        className="background-image"
        />
        <div className="container">
   
            <img className="containerLogo" src={MovieLogo} alt="Movie Logo"/>
          
          <div className="buttons flex " >
            
            <button className="button2 flex j-center a-center play sumir" >
              <FaPlay /> Play
              
            </button>
            <button className="button2 flex j-center a-center info sumir">
              <AiOutlineInfoCircle /> Info
            </button>
            
          </div>
          
        </div>
      </div>
      <Slider movies={movies}/>
     <Footer />
    </Container>
  )
}
const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: auto;
      width: 100vw;
    }
    .containerLogo{
      width: 68%;
      height: 86%;
      top -100px;
      position: absolute;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .fix01{
        margin-top: 100px;
      }
      .logo {
        margin-top: 3rem;
        img {
          width: 36%;
          height: 36%;
          margin-left: 3rem;
         
          
        }
      }
      .buttons {
       position: absolute;
        margin: 5rem;
        top: -14rem;
        left: 10px;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1115px){ 
    .info {
      left: 120px;
      height: 30px;
      width: 60px;
      width: 140px;
      line-height: 1px;
      font-size: 10px;
      
    }
    .play {
      height: 30px;
      width: 140px;
      font-size: 10px;
      left: -35px;
    }
    .button2 {
 

      position: absolute;
         top: 8rem;
         padding-right: 2.4rem;
         border: none;
         cursor: pointer;
         transition: 0.2s ease-in-out;
         &:hover {
           opacity: 0.8;
         }
         &:nth-of-type(2) {
           background-color: rgba(109, 109, 110, 0.7);
           color: white;
           svg {
             font-size: 1.8rem;
           }
         }
       }


  }
  @media (max-width: 788px){ 
   

  button {
 

 position: absolute;
    top: 100px;
    padding-right: 2.4rem;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
    &:nth-of-type(2) {
      background-color: rgba(109, 109, 110, 0.7);
      color: white;
      svg {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 590px){ 
 
    .hero {
      position: relative;
      .background-image {
       
        filter: brightness(60%);
      }
      img {
        background-size: cover;
        height: 90vw;
        width: 120vw;
      }
      .containerLogo{
        width: 68%;
        height: 86%;
        top -100px;
        position: absolute;
      }
      .container {
        position: absolute;
        bottom: 5rem;
        .fix01{
          margin-top: 100px;
        }
   
     
        }
      }
    }
  
    .info {
      top: 160px;
      left: -60px;
      height: 30px;
      width: 60px;
      width: 140px;
      line-height: 1px;

     
    }
    .play {
display: none;
      height: 30px;
      width: 140px;
      font-size: 10px;
      left: -35px;
    
   
    }
  


    
  }


`;
