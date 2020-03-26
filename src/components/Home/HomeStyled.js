import styled from 'styled-components';

export default styled.section`

box-shadow: 0 7px 16px 0 rgba(133, 133, 133, 0.5);
margin: 5em 4em;
min-height:10em;
background-color: #f7f7f7;
display: flex;
  article{
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p{
    margin: 2em;
    font-size: larger;
  }
  .title{
    margin: 1em;
    color: #630063;
    font-size: xx-large;
  }
  img{
    width: 50%;
    margin: 1em;
    border-radius: 1em;
  }
  
  a:hover{
    color: #630063;
    font-size: larger;
  }
  @media only screen and (max-width: 800px) {
  box-shadow: 0 7px 16px 0 rgba(133, 133, 133, 0.5);
  margin: 2em;
  min-height:10em;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  img{
    width: 95%;
  }
  article{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
`;
