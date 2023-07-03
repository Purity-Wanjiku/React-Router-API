import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
    
const Productsdetails = () => {
      const { productId } = useParams();
      const [product, setProduct] = useState(null);
    
      useEffect(() => {
        fetchProduct();
      }, [productId]);
    
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/${productId}`);
          const data = await response.json();
            setProduct(data);
            console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    
        
return (
    <div>
     <h1>Edit Product</h1>
     
     <p>Product ID: {productId}</p>
        <div>
            <img src={product.thumbnail} alt={product.title} />
            <label>Title:</label>
            <input type="text" value={product.title} />
            <label>Price:</label>
            <input type="number" value={product.price} />
            <label>Discounted Price:</label>
            <input type="number" value={product.discountPercentage} />
        
         
          <button type="submit">Submit</button>
        </div>
    </div>
  );
};


export default Productsdetails;