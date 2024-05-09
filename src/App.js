//import logo from './logo.svg';
import ProductList from './components/ProductList';
import CheckoutForm from './components/CheckoutForm';
import './App.css';

    const App = () => {
      return (
        <div>
          <h1>E-Commerce Website</h1>
          <ProductList />
          <CheckoutForm />

        </div>
      );
    };

export default App;
