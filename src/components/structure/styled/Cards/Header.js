import styled from 'styled-components';

const Header = styled.div`
  position: relative;
  z-index: 100;
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0;
  overflow: hidden;
  font-family: 'Muli', sans-serif;
`;

const Logo = styled.div`
  float: left;
  h1 {
    margin: 0;
  }
`;

const Navigation = styled.ul`
  float: left;
  margin-left: 20px;
  li {
    margin: 0;
    display: inline;
    padding-left: 15px;
    font-weight: 300;
    a {
      color: #101010;
      text-decoration: none;
    }
  }
`;

export default { Header, Logo, Navigation };