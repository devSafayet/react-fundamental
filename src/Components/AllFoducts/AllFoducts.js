import React, { useEffect, useState } from 'react';
import SingleProduct from '../SinglePoduct/SingleProduct';
import './AllFoducts.css'

const AllFoducts = (props) => {
    const { setCardCount } = props;

    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [Products]);
    // console.log(Products)
    return (
        <div>
            <h1>All Foducts</h1>
            <div className="container row">
                {Products.map(pd => (
                    <SingleProduct setCardCount={setCardCount} key={pd.id} products={pd}></SingleProduct>
                ))}
            </div>
        </div>
    );
};

export default AllFoducts;