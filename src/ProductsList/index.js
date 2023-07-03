import React, { useEffect, useState } from "react";
import './list.css';
import { createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";


const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ClickProducts();
    }, []);
    
    
    const ClickProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
            console.log(result.products);
            setProducts(result.products)
        }
        catch (error) {
            console.log(error.message);
        }

        // useEffect (()=>{
        //     (async()=>{
        //         await ClickProducts()
        //     })();
        // },[]);

    }
    return (
        <div>
            <h1>Products Available</h1>
            {products.map(item => (
                <div key={item.id}>
                    <img src={item.images[3]} className="image" />
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                    <p>{ item.discountPercentage}</p>

                    <Link to={`/products/${item.id}`}>
                        <button type="submit">See More</button>
                    </Link>
                </div>    
               ))}
        </div>
        );
};
export default ProductsList;