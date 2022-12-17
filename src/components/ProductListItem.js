import 'bootstrap/dist/css/bootstrap.css';

const ProductListItem = ({item}) => {
    console.log(item)

    return (
        <div className="flex-item">
            <h4>{item.name}</h4>
            <img src={item.image}></img>
            <h6>${item.price}</h6>
            <button className="btn btn-success">Buy Now</button>
        </div>
    )

}

export default ProductListItem