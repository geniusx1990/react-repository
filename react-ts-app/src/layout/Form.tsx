import { useState } from 'react';
import { IProps } from '../types/interfaces';
import BrandsOptions from './BrandsOptions';
import todayDate from './dateNow';
import TypeOptions from './TypeOptions';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/hooks';
import { setProductList } from '../store/formSlice';

function NameForm() {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const [cardId, setCardId] = useState(1);
  const [submitAlert, setSubmitMessage] = useState(false);

  const onSubmit = handleSubmit((data) => {
    dispatch(
      setProductList({
        id: cardId,
        title: data.title,
        brand: data.brand,
        date: data.date,
        thumbnail: URL.createObjectURL(data.thumbnail[0]),
        discount: data.discount === 'withDiscount',
        category: data.category,
      })
    );
    reset();
    setSubmitMessage(true);
    setCardId((prev) => prev + 1);
  });

  const handleChange = () => {
    setSubmitMessage(false);
  };

  return (
    <form onSubmit={onSubmit} onChange={handleChange} className="form">
      <div className="form-wrapper">
        <div className="column-labels">
          <ul className="label-list">
            <li className="label-item">
              <label>
                Name:
                <input
                  {...register('title', { required: true, pattern: /^[A-ZА-Я]{1}[\S\s]{0,30}$/ })}
                  type="text"
                  className="name-input"
                  placeholder="enter product name"
                />
              </label>
            </li>
            <li className="label-item">
              <label>
                Brand:
                <select {...register('brand', { required: true })} className="brand-select">
                  <BrandsOptions />
                </select>
              </label>
            </li>
            <li className="label-item">
              <label>
                Date:
                <input
                  {...register('date', { required: true, validate: (value) => value <= todayDate })}
                  type="date"
                  className="date-input"
                />
              </label>
            </li>
            <li className="label-item">
              <label>
                Please upload image:
                <input
                  {...register('thumbnail', { required: true })}
                  type="file"
                  accept="image/png, image/jpeg"
                />
              </label>
            </li>
            <li className="label-item">
              <label>
                Please select price:
                <input
                  {...register('discount', { required: true })}
                  type="radio"
                  id="salePriceRef"
                  name="discount"
                />
                <label htmlFor="salePriceRef">On sale</label>
                <input
                  {...register('discount', { required: true })}
                  type="radio"
                  id="fullPriceRef"
                  name="discount"
                />
                <label htmlFor="fullPriceRef">Full price</label>
              </label>
            </li>
            <li className="label-item">
              <label>
                Type:
                <select {...register('category', { required: true })} className="category-select">
                  <TypeOptions />
                </select>
              </label>
            </li>
            <li className="label-item">
              <label>
                Please confirm our agreement:
                <input {...register('confirm', { required: true })} type="checkbox" id="confirm" />
                <label htmlFor="confirm">I agree to proceed with this form</label>
              </label>
            </li>
          </ul>
        </div>
        <div className="column-warnings">
          <ul className="warnings-list">
            <li className="warning-item">
              {errors.title && <p className="warning-message">Please enter a name longer</p>}
            </li>
            <li className="warning-item">
              {errors?.brand && <p className="warning-message">Please select brand name</p>}
            </li>
            <li className="warning-item">
              {errors.date && (
                <p className="warning-message">Please enter a date older than today</p>
              )}
            </li>
            <li className="warning-item">
              {errors.thumbnail && <p className="warning-message">Please upload thumbnail</p>}
            </li>
            <li className="warning-item">
              {errors.discount && (
                <p className="warning-message">Please select a discount price or full price</p>
              )}
            </li>
            <li className="warning-item">
              {errors.category && (
                <p className="warning-message">Please choose type of you device</p>
              )}
            </li>
            <li className="warning-item">
              {errors.confirm && <p className="warning-message">Please confirm our agreement</p>}
            </li>
            <li className="warning-item">
              {submitAlert && <p className="warning-message">You card added</p>}
            </li>
          </ul>
        </div>
      </div>
      <input type="submit" value="Submit" className="confirm-button" />
    </form>
  );
}

export default NameForm;
