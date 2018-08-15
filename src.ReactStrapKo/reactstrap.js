import React from 'react';
import { Alert, Button } from 'reactstrap';

export const AlertEx = (props) => {
  return (
    <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert>
    </div>
  );
};

export const ButtonEx = () => (
  <div>
    <Button color="primary">primary</Button>{' '}
    <Button color="secondary">secondary</Button>{' '}
    <Button color="success">success</Button>{' '}
    <Button color="info">info</Button>{' '}
    <Button color="warning">warning</Button>{' '}
    <Button color="danger">danger</Button>{' '}
    <Button color="link">link</Button>
  </div>
)