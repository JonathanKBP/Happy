import styled from 'styled-components';
import backgroundImage from '../../images/landing.svg';

export const PageLanding = styled.div`
  background: linear-gradient(329.54deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secundary} 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  padding: 45px;
  
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background: url(${backgroundImage}) no-repeat 80% center;
`;

export const Switch = styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  display: flex;  
  margin-right: 45%;
`;

export const Main = styled.div`
  max-width: 350px;
`;

export const H1 = styled.div`
  font-size: 76px;
  font-weight: 900;
  line-height: 78px;
`;

export const P = styled.div`
  margin-top: 48px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 45px;
`;

export const Strong = styled.div`
  font-weight: 800;
`;


export const EnterApp = styled.div`
  position: absolute;
  right: 0;
  bottom: 45px;
  width: 80px;
  height: 80px;
  background-color: #ffd666;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  margin-right: 45px;

  &:hover,
  &:focus {
    background: #96feff
  }
`;