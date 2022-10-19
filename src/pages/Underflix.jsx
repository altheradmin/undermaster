import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar';
import BackgroundImage from '../assets/home.jpg';
import MovieLogo from "../assets/lg.png";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import NewSlider from '../components/NewSlider';


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
  
  
  
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 window.location.href = "https://google.com";
}else{

}
  
  
  
  
  return (
    <Container>
   
      <NavBar isScrolled={isScrolled}/>
      <div className="hero">
        <img 
        src={BackgroundImage} 
        alt="Background"
        className="background-image background-image2"
        />
        <div className="container">
   
            <img className="containerLogo fx1" src={MovieLogo} alt="Movie Logo"/>
          
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

      <NewSlider movies={movies}/>

     <Footer />
        

      }

        
    </Container>
  )
}
const Container = styled.div`


.containerLogo{
     
  top: -30vw;
  left: 70px;


   position: absolute;
 }







  background-color: black;
  .hero {
    margin-bottom: 155px;
    position: relative;
    .background-image {
      height: auto;
      width: 100vw;
      filter: brightness(40%);
    }
   
  
    .container {
      position: absolute;
      bottom: 5rem;
      .fix01{
        margin-top: 100px;
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



















    
    .containerLogo{
     
      top: -200px;
      left: 50px;
    
  
       position: absolute;
     }



    .info {
      left: 120px;
      height: 40px;
      width: 60px;
      width: 140px;
      line-height: 1px;
      font-size: 10px;
      
    }
    .play {
      height: 40px;
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

  @media (max-width: 978px){
    .containerLogo{
     
      top: -28vw;
      left: 18vw;
    
  
       position: absolute;
     }
  }


  @media (max-width: 888px){
    .containerLogo{
 
      top: -28vw;
      left: 15vw;
    
    
  
       position: absolute;
     }
  }





  @media (max-width: 888px){
    .containerLogo{
 
      top: -28vw;
      left: 12vw;
    
    
  
       position: absolute;
     }
  }

  @media (max-width: 742px){
    .containerLogo{
      
      top: -28vw;
      left: 13vw;
    
    
  
       position: absolute;
     }



     .fx1{
    width: 70vw;
    }



  }



  @media (max-width: 590px){ 
  

    .info {
      top: 140px;
      left: -60px;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
    .play {
      top: 140px;
      height: 30px;
      
    
      left: 21px;
    
   
    }






    .containerLogo{
      width: 400px;
       top: -280px;
       left: 50px;
       
   
        position: absolute;
      }




    .hero {
      position: relative;
      .background-image {
        height: 110vw;
      width: 170vw;
        filter: brightness(40%);
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
 
  


    
  }
  @media (max-width: 490px){ 


   


    .containerLogo{
      width: 80%;
       top: -10rem;
       left: 50px;
       
   
        position: absolute;
      }




    .hero {
      position: relative;
      .background-image {
        height: 110vw;
      width: 170vw;
        filter: brightness(40%);
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
  



    







  }


  @media (max-width: 410px){ 

    .info {
      top: 140px;
      left: 2vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
    .play {
      top: 140px;
      height: 30px;
      
    
      left: 95px;
    
   
    }
  }


  @media (max-width: 410px){
    .play {
      top: 140px;
      height: 30px;
      
    
      left: 75px;
    
   
    }
    .info {
      top: 140px;
      left: -2vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
  }
  @media (max-width: 360px){


    .containerLogo{
      
      top: -48vw;
      left: 13vw;
    
    
  
       position: absolute;
     }





    .play {
      top: 180px;
      height: 30px;
      
    
      left: 62px;
    
   
    }
    .info {
      top: 180px;
      left: -4vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
  }




  @media (max-width: 344px){


    .containerLogo{
      
      top: -48vw;
      left: 13vw;
    
    
  
       position: absolute;
     }





    .play {
      top: 180px;
      height: 30px;
      
    
      left: 53px;
    
   
    }
    .info {
      top: 180px;
      left: -7vw;
      height: 30px;
      width: 20px;
    
      line-height: 1px;

     
    }
  }









`;
