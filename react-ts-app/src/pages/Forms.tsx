import Card from '../layout/Card';
import NameForm from '../layout/Form';
import Header from '../layout/header';
import { IProduct } from '../types/interfaces';
import { useAppSelector } from '../store/hooks';

function Forms() {
  const { productList } = useAppSelector((state) => state.formReducer);

  return (
    <>
      <Header pageName="Form" />
      <h1>This is FORM PAGE</h1>
      <NameForm />
      <div className="cards">
        {productList.map((item: IProduct) => (
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
export default Forms;
