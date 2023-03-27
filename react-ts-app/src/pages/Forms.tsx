import React from 'react';
import NameForm from '../layout/Form';
import Header from '../layout/header';
import { ICard, IProduct } from '../types/interfaces';

class Forms extends React.Component<ICard, IProduct> {
  constructor(props: ICard) {
    super(props);
  }
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
