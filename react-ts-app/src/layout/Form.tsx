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

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log(this.state.name + this.state.date);
    event.preventDefault();
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            ref={this.nameRef}
            type="text"
            className="name-input"
            placeholder="insert your name"
          />
        </label>
        <label>
          date:
          <input
            ref={this.dateRef}
            type="date"
            className="date-input"
            placeholder="insert your name"
          />
        </label>
        <label>
          Brand:
          <select ref={this.brandRef} className="brand-select">
            <BrandsOptions />
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
