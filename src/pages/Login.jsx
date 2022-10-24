import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Footer from "../components/Footer";
import Background from "../assets/login.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <img className="bgbg" src={Background} alt="background"/>
      <div className="content">
        <Header />
        
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="botao" onClick={handleLogin}>Logar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
.bgbg{
  max-height: 100vh;
}
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
   
    .form-container {
      gap: 2rem;
     
      .form {
        padding: 2rem;
        margin-top: 100px;
        background-color: #000000b0;
        max-width: 340px;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
      
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
  @media (max-width: 410px){ 

    .botao {
     
 
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 14px;
    }
  }
`;

export default Login;