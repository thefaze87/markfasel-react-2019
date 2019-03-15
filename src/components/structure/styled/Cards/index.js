import styled from 'styled-components';
import Masthead from './Masthead';
import Header from './Header';
import MastheadContent from './MastheadContent';
import About from './About';

const Card = styled.div`
  background: #ffffff;
  border-radius: 2px;
  position: relative;
`;

Card.Masthead = Masthead;
Card.Header = Header.Header;
Card.Logo = Header.Logo;
Card.Navigation = Header.Navigation;
Card.MastheadContent = MastheadContent;
Card.AboutMe = About.AboutMe;
Card.Services = About.Services;


export default Card;