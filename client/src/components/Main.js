const React = require('react');
const { ListGroup } = require('react-bootstrap');

export const Main = (props) => (
  <div className={props.className}>
    <ListGroup>
      <ListGroup.Item action href="/short">
        Go to URL-shortener
      </ListGroup.Item>
    </ListGroup>
  </div>
);
