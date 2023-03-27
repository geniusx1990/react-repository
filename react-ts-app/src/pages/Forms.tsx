import React from 'react';
import NameForm from '../layout/Form';
import Header from '../layout/header';

class Forms extends React.Component {
  render() {
    return (
      <>
        <Header pageName="Form" />
        <h1>This is FORM PAGE</h1>
        <NameForm />
      </>
    );
  }
}
export default Forms;
