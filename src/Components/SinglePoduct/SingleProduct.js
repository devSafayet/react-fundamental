import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'
const SingleProduct = (props) => {
    // console.log(props.products)
    const { setCardCount } = props;
    return (
        <div className='col-md-4'>
            <div className="card border p-3">
                <img className="w-50 m-auto" src={props.products.image} alt="" />
                <h1>{props.products.title.slice(0, 10)}</h1>
                <div className="d-flex justify-content-around">
                    <button onClick={setCardCount} className="btn btn-success">Add to Card</button>
                    <button className="btn btn-danger">Delete</button>
                    {/* <button className="btn btn-info">Details</button> */}
                    <ReactModal products={props.products}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;