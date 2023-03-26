import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <h1>We cannot found this page</h1>
        <Link to="/">GO HOME</Link>
      </>
    );
  }
}
export default NotFoundPage;
