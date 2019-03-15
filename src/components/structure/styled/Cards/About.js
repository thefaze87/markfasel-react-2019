import styled from 'styled-components';

const AboutMe = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 3rem 0;
  font-family: 'Muli', sans-serif;
  position: relative;
  overflow: hidden;
  .section-header {
    text-align: center;
  }
  h1 {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    color: #101010;
    font-weight: 900;
    position: relative;
    z-index: 10;
    display: inline-block;
    &:before {
      background: #FFCC03;
      position: absolute;
      z-index: -1;
      content: '';
      display: block;
      bottom: 5px;
      width: 85%;
      height: 10px;
      left: 50%;
      margin-left: -42.5%;
    }
    span {
      font-weight: 300;
    }
  }
  .about-left {
    float: left;
    width: calc(50%);
    background: #EFEFEF;
    .content {
      padding: 30px 45px 30px 30px; 
      h2 {
        font-size: 24px;
        font-weight: 600;
        line-height: 30px;
      }
      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
      }
    }
  }
  .about-right {
    float: right;
    width: calc(50%);
    background: #FF7000;
    position: relative;
    left: -20px;
    top: 30px;
    .content {
      padding: 30px; 
      p {
        font-size: 16px;
        font-weight: 300;
        color: #fff;
        line-height: 26px;
      }
    }
  }
  
`;
const Services = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 3rem 0;
  font-family: 'Muli', sans-serif;
  overflow: hidden;
  [class*= "col-"] {
    float: left;
    width: calc(33.33% - 20px);
    text-align: center;
    padding-left: 20px;
    &:first-child {
      padding: 0;
    }
    h2 {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 800;
        line-height: 30px;
        color: #14BAA2;
        margin-bottom: 0;
      }
      p {
        margin-top: 5px;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
      }
  }
`;

export default {AboutMe, Services};