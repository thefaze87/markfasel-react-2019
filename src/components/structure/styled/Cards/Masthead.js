import styled from 'styled-components';
import mastBackground from '../../../../images/desk-mac.jpg';

const Masthead = styled.section`
  background: url(${mastBackground}) no-repeat center top fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: calc(100vh - 300px);
  position: relative;
  &:before {
    background: #F2F1F3;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    opacity: 0.85;
  }
`;

export default Masthead;