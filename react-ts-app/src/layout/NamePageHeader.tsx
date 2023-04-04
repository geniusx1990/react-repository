type MyProps = {
  message: string;
};

function NamePageHeader(props: MyProps) {
  return <h1>{props.message}</h1>;
}
export default NamePageHeader;
