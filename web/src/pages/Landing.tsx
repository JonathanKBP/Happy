import React, { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import * as landing from '../styles/pages/landing';

import logoImg from '../images/logo.svg';

function Landing() {
  
  return (
    <>
      <landing.PageLanding>
        <landing.ContentWrapper>
          <img src={logoImg} alt="Happy" />  
               
          <landing.Switch>
          
          </landing.Switch>

          <landing.Main>
            <landing.H1>
              Leve felicidade para o mundo
            </landing.H1>
            <landing.P>
              Visite orfanatos e mude o dia de muitas crianças.
            </landing.P>
                              
          </landing.Main>

          <landing.Location>
            <landing.Strong>São Paulo</landing.Strong>
            <span>São Paulo</span>
          </landing.Location>                    


          <landing.EnterApp>
            <Link to="/app">
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
          </landing.EnterApp>
        </landing.ContentWrapper>
      </landing.PageLanding>
    </>
  );
}



export default Landing;