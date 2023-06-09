import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const APIUrl = process.env.REACT_APP_API_URL;
const baseUrl = APIUrl + "/product";

const UpdateProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => { 
            let result = await fetch(baseUrl + "/get/" + id, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            });
            result = await result.json();

            if (result) {
                setName(result.name);
                setPrice(result.price);
                setCategory(result.category);
                setCompany(result.company);
            }
        };
        getProduct();
    }, [id]);

    const updateProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        await fetch(baseUrl + "/update/" + id, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
                "Content-Type": "application/json"
            }
        });

        navigate("/");
    };

    return (
        <div className="add-product">
            <h1>Update Product</h1>

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            {error && !name && <span className="invalid-input">Name is mandatory*</span>}

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            {error && !price && <span className="invalid-input">Price is mandatory*</span>}
            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            {error && !category && <span className="invalid-input">Category is mandatory*</span>}

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Company"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
            />
            {error && !company && <span className="invalid-input">Company name is mandatory*</span>}

            <button onClick={updateProduct} className="appButton">
                Update Product
            </button>
        </div>
    );
};

export default UpdateProduct;
 