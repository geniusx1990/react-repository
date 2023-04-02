import React from 'react';
import { IProps, IState } from '../types/interfaces';
import BrandsOptions from './BrandsOptions';
import todayDate from './dateNow';
import TypeOptions from './TypeOptions';

class NameForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      id: 1,
      message: false,
      errorTitle: false,
      errorDate: false,
      errorBrand: false,
      errorDiscount: false,
      errorThumbnail: false,
      errorType: false,
      errorConfirm: false,
    };

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
  typedRef = React.createRef<HTMLSelectElement>();
  confirmRef = React.createRef<HTMLInputElement>();

  handleChange() {
    this.setState({ message: false });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameRefValid = this.nameRef.current?.value && this.nameRef.current?.value.length > 4;
    this.setState({ errorTitle: nameRefValid ? false : true });

    const brandValidation = this.brandRef.current?.value !== 'test';
    this.setState({ errorBrand: brandValidation ? false : true });

    const dateValidation = this.dateRef.current?.value && this.dateRef.current?.value <= todayDate;
    this.setState({ errorDate: dateValidation ? false : true });

    const discountValidation =
      this.salePriceRef.current?.checked || this.fullPriceRef.current?.checked;
    this.setState({ errorDiscount: discountValidation ? false : true });

    const thumbnailValidation = this.imageRef?.current?.files?.length;
    this.setState({ errorThumbnail: thumbnailValidation ? false : true });

    const typeValidation = this.typedRef.current?.value !== 'type-name';
    this.setState({ errorType: typeValidation ? false : true });

    const agreeValidation = this.confirmRef.current?.checked;
    this.setState({ errorConfirm: agreeValidation ? false : true });

    if (
      nameRefValid &&
      brandValidation &&
      dateValidation &&
      discountValidation &&
      thumbnailValidation &&
      typeValidation &&
      agreeValidation == true
    ) {
      this.props.addProduct({
        id: this.state.id,
        title: this.nameRef.current?.value ?? '',
        date: this.dateRef.current?.value ?? '',
        discount: this.salePriceRef.current?.checked ?? false,
        brand: this.brandRef.current?.value ?? '',
        category: this.typedRef.current?.value ?? '',
        thumbnail: this.imageRef?.current?.files
          ? URL.createObjectURL(this.imageRef.current.files[0])
          : '',
      });

      this.setState({ message: true });
      this.formRef.current?.reset();
      this.setState((prev) => ({ id: prev.id + 1 }));
    }
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit} className="form">
        <div className="form-wrapper">
          <div className="column-labels">
            <ul className="label-list">
              <li className="label-item">
                <label>
                  Name:
                  <input
                    ref={this.nameRef}
                    type="text"
                    className="name-input"
                    placeholder="enter product name"
                  />
                </label>
              </li>
              <li className="label-item">
                <label>
                  Brand:
                  <select ref={this.brandRef} className="brand-select">
                    <BrandsOptions />
                  </select>
                </label>
              </li>
              <li className="label-item">
                <label>
                  Date:
                  <input ref={this.dateRef} type="date" className="date-input" />
                </label>
              </li>
              <li className="label-item">
                <label>
                  Please upload image:
                  <input ref={this.imageRef} type="file" accept="image/png, image/jpeg" />
                </label>
              </li>
              <li className="label-item">
                <label>
                  Please select price:
                  <input ref={this.salePriceRef} type="radio" id="salePriceRef" name="discount" />
                  <label htmlFor="salePriceRef">On sale</label>
                  <input ref={this.fullPriceRef} type="radio" id="fullPriceRef" name="discount" />
                  <label htmlFor="fullPriceRef">Full price</label>
                </label>
              </li>
              <li className="label-item">
                <label>
                  Type:
                  <select ref={this.typedRef} className="brand-select">
                    <TypeOptions />
                  </select>
                </label>
              </li>
              <li className="label-item">
                <label>
                  Please confirm our agreement:
                  <input ref={this.confirmRef} type="checkbox" id="confirm" />
                  <label htmlFor="confirm">I agree to proceed with this form</label>
                </label>
              </li>
            </ul>
          </div>
          <div className="column-warnings">
            <ul className="warnings-list">
              <li className="warning-item">
                {this.state.errorTitle && (
                  <p className="warning-message">Please enter a name longer</p>
                )}
              </li>
              <li className="warning-item">
                {this.state.errorBrand && (
                  <p className="warning-message">Please select brand name</p>
                )}
              </li>
              <li className="warning-item">
                {this.state.errorDate && (
                  <p className="warning-message">Please enter a date older than today</p>
                )}
              </li>
              <li className="warning-item">
                {this.state.errorThumbnail && (
                  <p className="warning-message">Please upload thumbnail</p>
                )}
              </li>
              <li className="warning-item">
                {this.state.errorDiscount && (
                  <p className="warning-message">Please select a discount price or full price</p>
                )}
              </li>
              <li className="warning-item">
                {this.state.errorType && (
                  <p className="warning-message">Please choose type of you device</p>
                )}
              </li>
              <li className="warning-item">
                {this.state.errorConfirm && (
                  <p className="warning-message">Please confirm our agreement</p>
                )}
              </li>
              <li className="warning-item">
                {this.state.message && <p className="warning-message">You card added</p>}
              </li>
            </ul>
          </div>
        </div>
        <input type="submit" value="Submit" className="confirm-button" />
      </form>
    );
  }
}

export default NameForm;
