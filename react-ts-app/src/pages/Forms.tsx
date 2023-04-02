import React from 'react';
import Card from '../layout/Card';
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
        <div className="cards">
          {this.state.productList.map((item) => (
            <Card
              title={item.title}
              discount={item.discount}
              brand={item.brand}
              category={item.category}
              thumbnail={item.thumbnail}
              date={item.date}
              key={item.id}
            />
          ))}
        </div>
      </>
    );
  }
}
export default Forms;
