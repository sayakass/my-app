import ProductItem from '../ProductItem';

function Welcome(props) {
  return <div>Hello World of React, My first React Project</div>;
}

function Greeting(props) {
  return <div>Greeting Component</div>;
}

const PI = 3.14;

function MyComponent(props) {
  return (
    <div>
      This is MyComponent
      <ProductItem />
    </div>
  );
}

export { Welcome, Greeting, PI };
export default MyComponent;
