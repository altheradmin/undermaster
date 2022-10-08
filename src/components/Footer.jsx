import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
    
    
<div className='copyright2'>

</div>


    <footer className="  ff2r">
  <div className="container p-4">

  <section className="">
      <form action="">
 
        <div className="">
      
          <div className="col-12">
            <p className="pt-2">
              <strong className='titulo'>UnderFlix 2022</strong>
            </p>
          </div>


     
         
        </div>
     
      </form>
    </section>
 


    <section className="master">

      <div className="row">
       




   
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className=" textC">Conta</a>
            </li>
            <li>
              <a href="#!" className=" textC">Esqueci Senha</a>
            </li>
            <li>
              <a href="#!" className=" textC">Administrador</a>
            </li>
            <li>
              <a href="#!" className=" textC">Configurações</a>
            </li>
          </ul>
        </div>












        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className=" textC">Sobre</a>
            </li>
            <li>
              <a href="#!" className=" textC">Contato</a>
            </li>
            <li>
              <a href="#!" className=" textC">Perguntas frequentes</a>
            </li>
            <li>
              <a href="#!" className=" textC">Sugerir Filme</a>
            </li>
          </ul>
        </div>
       

       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className=" textC">Ajuda</a>
            </li>
            <li>
              <a href="#!" className=" textC">Reportar um bug</a>
            </li>
            <li>
              <a href="#!" className=" textC">SiteMap</a>
            </li>
     
          </ul>
        </div>
       

    
       

       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className=" textC">LinkedIn</a>
            </li>
            <li>
              <a href="#!" className=" textC">GitHub</a>
            </li>
            <li>
              <a href="#!" className=" textC">Portfólio</a>
            </li>
            <li>
              <a href="#!" className=" textC">Facebook</a>
            </li>
          </ul>
        </div>
       
      </div>
    
    </section>
  
  </div>

  <div className="text-center p-3 copyright master2" >
   
    <a className="master2" href="#"></a>
  </div>

</footer>


















    </Container>
  )
}

const Container = styled.div`


.ff2r{
    background-color: rgba(22, 20, 20, 0.25);
    padding-top: 40px;
}

.textF {
    font-size: 14px;
    color: rgba(100, 100, 100, 1.0);
     
    }


.textP {
font-size: 18px;
color: rgba(100, 100, 100, 1.0);
 
}
.textC {
    font-size: 15px;
    color: rgba(200, 200, 200, 0.3);
    text-decoration: none;     
    }
    .textA {
        font-size: 18px;
        color: rgba(200, 200, 200, 0.5);
         
        }
.titulo {
    color: rgba(120, 120, 120, 0.5);
    margin-bottom: 70px;
}
.copyright{
    background-color: rgba(170, 170, 170, 0.02);
    margin-top: 50px;
}

.copyright2{
    background-color: rgba(170, 170, 170, 0.03);
    margin-top: 15px;
    margin-bottom: 15px;
}


.master{
    padding-top: 50px;
}
.master2{
   color: rgba(170, 170, 170, 0.55);
   text-decoration: none;
}
`;