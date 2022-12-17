import './App.css';
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import {useDispatch} from 'react-redux';

function App() {

  

  return (
    <div>
      <h1>hello world</h1>
    <SearchBar/>
    <ProductList/>
    </div>
  );
}

export default App;

