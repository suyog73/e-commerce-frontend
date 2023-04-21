import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

const APIUrl = process.env.REACT_APP_API_URL;
const baseUrl = `${APIUrl}/product/add`;


const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(''); 
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();


    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        console.log(userId);

        let result = await fetch(baseUrl, {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
                "Content-Type": "application/json"
            }

        })

        result = await result.json();

        console.log(result);

        navigate("/");
    }

    return <div className="add-product">
        <h1>Add Product</h1>

        <input className="inputBox" type="text" placeholder="Enter Product Name"
            onChange={(e) => setName(e.target.value)} value={name} />
        {
            error && !name && <span className="invalid-input">Name is mandatory*</span>
        }

        <input className="inputBox" type="text" placeholder="Enter Product Price"
            onChange={(e) => setPrice(e.target.value)} value={price} />
        {
            error && !price && <span className="invalid-input">Price is mandatory*</span>
        }
        <input className="inputBox" type="text" placeholder="Enter Product Category"
            onChange={(e) => setCategory(e.target.value)} value={category} />
        {
            error && !category && <span className="invalid-input">Category is mandatory*</span>
        }

        <input className="inputBox" type="text" placeholder="Enter Product Company"
            onChange={(e) => setCompany(e.target.value)} value={company} />
        {
            error && !company && <span className="invalid-input">Company name is mandatory*</span>
        }

        <button onClick={addProduct} className="appButton">Add Product</button>
    </div>
}

export default AddProduct;