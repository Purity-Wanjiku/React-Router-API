import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AddProduct= () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${1}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      {product && (
        <form>
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <label>Title:</label>
            <input type="text" value={product.title} />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" value={product.price} />
          </div>
          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddProduct;

    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [discount,setDiscount] = useState (0)


//     const AddProduct = (e) => {
//         e.preventDefault();
//         const producttoadd{
// title:title,
//         }

// }


    // const response = () => fetch('', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify()
    // }) 











    // try {
    //     const response = fetch('https://dummyjson.com/products/1');
    //     const result = response.json();
    //     console.log(result);
    // }
    // catch (error) {
    //     console.log(error.message);
    // }

    
