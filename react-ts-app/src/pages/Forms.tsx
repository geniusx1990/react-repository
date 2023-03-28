import React from 'react';
import NameForm from '../layout/Form';
import Header from '../layout/header';
import { IProductList, IProduct } from '../types/interfaces';

class Forms extends React.Component<Record<string, never>, IProductList> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  addProduct = (product: IProduct) => {
    this.setState((prev) => ({ productList: [...prev.productList, product] }));
  };

  render() {
    return (
      <>
        <Header pageName="Form" />
        <h1>This is FORM PAGE</h1>
        <NameForm addProduct={this.addProduct} />
      </>
    );
  }
}
export default Forms;
