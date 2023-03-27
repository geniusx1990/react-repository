import React from 'react';
import { IProps, IState } from '../types/interfaces';
import BrandsOptions from './BrandsOptions';

class NameForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formRef = React.createRef<HTMLFormElement>();
  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  brandRef = React.createRef<HTMLSelectElement>();
  imageRef = React.createRef<HTMLInputElement>();
  salePriceRef = React.createRef<HTMLInputElement>();
  fullPriceRef = React.createRef<HTMLInputElement>();
  confirmRef = React.createRef<HTMLInputElement>();

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log(this.state.name + this.state.date);
    event.preventDefault();
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit} className="form">
        <label>
          Name:
          <input
            ref={this.nameRef}
            type="text"
            className="name-input"
            placeholder="enter product name"
          />
        </label>
        <label>
          Date:
          <input ref={this.dateRef} type="date" className="date-input" />
        </label>
        <label>
          Brand:
          <select ref={this.brandRef} className="brand-select">
            <BrandsOptions />
          </select>
        </label>
        <label>
          Please upload image:
          <input ref={this.imageRef} type="file" accept="image/png, image/jpeg" />
        </label>
        <label>
          Please select price:
          <input ref={this.salePriceRef} type="radio" id="salePriceRef" name="discount" />
          <label htmlFor="salePriceRef">On sale</label>
          <input ref={this.fullPriceRef} type="radio" id="fullPriceRef" name="discount" />
          <label htmlFor="fullPriceRef">Full price</label>
        </label>
        <label>
          Please confirm our agreement:
          <input ref={this.confirmRef} type="checkbox" id="confirm" />
          <label htmlFor="confirm">I agree to proceed with this form</label>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
