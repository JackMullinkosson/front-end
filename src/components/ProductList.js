import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getProducts } from '../actions';
import ProductListItem from './ProductListItem';
import { fetchProducts } from '../helpers/fetchProducts';
import 'bootstrap/dist/css/bootstrap.css';

const ProductList = () =>{


    const products = useSelector((state) => state)

    const dispatch = useDispatch();

    const initialLoad = async () =>{
        const productData = await fetchProducts();
        dispatch(getProducts(productData))
    }

    useEffect(()=>{
        initialLoad();
    },[])


    function renderProductListItem () {
        return products.map((item)=> <ProductListItem item={item}/>)
    }

    if (products.length > 0){
    return (
        <div className="flex-container">
            <div>{renderProductListItem()}</div>
        </div>
    )
    }
    return <div>Loading, please wait..</div>
}

export default ProductList;