import axios from 'axios';

export async function fetchProducts () {
try{
    const products = await axios.get('http://localhost:8000/products')
    return products;
}
catch(e){
    console.error('error in fetching product data', e)
    throw e;
}

}