import styled from 'styled-components';
import Masthead from './Masthead';
import Header from './Header';
import Logo from './Logo';
import MastheadContent from './MastheadContent';

const Card = styled.div`
  background: #ffffff;
  border-radius: 2px;
  position: relative;
`;

Card.Masthead = Masthead;
Card.Header = Header;
Card.Logo = Logo;
Card.MastheadContent = MastheadContent;


export default Card;