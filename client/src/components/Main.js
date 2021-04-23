import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Main = ({ className }) => (
  <div className={className}>
    <ListGroup>
      <ListGroup.Item>
        <Link to="/short">Go to URL-shortener</Link>
      </ListGroup.Item>
      <ListGroup.Item>
      <Link to="/file">File Uploader</Link>
      </ListGroup.Item>
    </ListGroup>
  </div>
);
