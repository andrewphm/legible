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
          <Link to={`/${location[0]}`}>
            <p>{location[0]}</p>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={`/${location[0]}/${location[1]}`}>
            <p>{location[1]}</p>
          </Link>
        </ListItem>
        <ListItem>
          <p>{location[2]}</p>
        </ListItem>
      </BreadCrumbList>
    </Container>
  );
};

export default BreadCrumb;
