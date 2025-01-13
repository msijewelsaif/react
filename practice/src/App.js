import './App.css';

function App() {
  // Corrected products array
  const products = [
    { name: 'Photoshop', price: '99$' },
    { name: 'VS Code', price: '9$' },
    { name: 'VS Studio', price: '9$' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Displaying Person components */}
        <Person name="Md Saiful Islam" />
        <Person name="Jakir Hasan" />
        <Person name="Sabbir Hasan" />

        {/* Displaying Product components */}
        <div className="product-container">
          {products.map((product, index) => (
            <Product key={index} name={product.name} price={product.price} />
          ))}
        </div>
      </header>
    </div>
  );
}

// Person Component
function Person(props) {
  return (
    <div style={{ border: '2px solid red', margin: '10px', padding: '10px' }}>
      <h1>Name: {props.name}</h1>
    </div>
  );
}

// Product Component
function Product(props) {
  return (
    <div className="product-card">
      <h2 className="product-name">{props.name}</h2>
      <h3 className="product-price">Price: {props.price}</h3>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default App;
