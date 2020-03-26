import React from 'react';
import { Container } from 'semantic-ui-react';
import ProjectStyled from './ProjectStyled';
import CardProject from './CardProject';

const Project = () => (
  <Container style={{ margin: 20 }}>
    <ProjectStyled>
      <CardProject />
    </ProjectStyled>
  </Container>

);

export default Project;
