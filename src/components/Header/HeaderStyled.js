import styled from 'styled-components';

export default styled.header`
padding: 1em;
border-bottom : 2px dashed lightgray;
background-color: #f7f7f7;
.logo{
  float:left;
  margin-top:-1em;
  margin-left:-1em;
}
img{
  width: 6em;
  border-radius: 0em 3em 3em 0em;
  height: 4.5em;
}
.selected{
  border-radius: 2em;
  padding: 0.5em;
  padding-left: 0.9em;
  padding-right: 0.9em;
  background-color: lightgrey;
}
nav{
  display: flex;
  justify-content: space-evenly;
  align-items:center;
&.navlink{
  padding: 0.2em;
}
.navlink:hover{
  color:#630063;
}
} 

`;
