import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:5000/product";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch(baseUrl + "/get/all");
        result = await result.json();

        setProducts(result);
        console.log(products);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(baseUrl + `/delete/${id}`, {
            method: "Delete"
        });
        result = await result.json();

        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(baseUrl + `/search/${key}`)
            result = await result.json();

            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }

    return <div className="product-list">

        <h2>Product List</h2>

        <input className="search-product-box" type="text" placeholder="Search Product"
            onChange={searchHandle}
        />

        <ul>
            <li>S. No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Operation</li>
        </ul>
        {
            products.length > 0 ? products.map((item, index) =>
                <ul key={item._id}>
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>₹{item.price}</li>
                    <li>{item.category}</li>
                    <li>
                        <button onClick={() => deleteProduct(item._id)}>Delete</button>
                        <Link to={"/update/" + item._id}>Update</Link>
                    </li>

                </ul>
            ) : <h1>
                Nothing to show here...
            </h1>
        }


    </div>
}

export default ProductList;