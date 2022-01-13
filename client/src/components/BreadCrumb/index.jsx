import React from 'react';
import { BreadCrumbList, Container, ListItem } from './BreadCrumb.styles';

//router
import { useLocation, Link } from 'react-router-dom';

const BreadCrumb = () => {
  let location = useLocation().pathname.split('/');
  location.splice(0, 1);

  return (
    <Container>
      <BreadCrumbList>
        <ListItem>
          <Link to={`/legible/${location[1]}`}>
            <p>{location[1]}</p>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={`/legible/${location[1]}/${location[2]}`}>
            <p>{location[2]}</p>
          </Link>
        </ListItem>
        <ListItem>
          <p>{location[3].split('%20').join(' ').split(',').join(' & ')}</p>
        </ListItem>
      </BreadCrumbList>
    </Container>
  );
};

export default BreadCrumb;
