import React from 'react';
import Data from 'src/data/project';
import { Card, Image } from 'semantic-ui-react';


const CardProject = () => (
  <Card.Group>
    {
      Data.map((project) => (
        <Card>
          <Image
            src={project.preview}
            wrapped
            ui={false}
            as="a"
            href={project.link}
            target="_blank"
          />
          <Card.Content>
            <Card.Header>
              <a href={project.link}>{project.name}</a>
            </Card.Header>
            <Card.Description>
              {project.technologie}
            </Card.Description>
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>
);

export default CardProject;
