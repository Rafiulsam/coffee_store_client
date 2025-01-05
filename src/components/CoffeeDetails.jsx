import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const { name, price, supplier, test, category, details, photo } = coffee
    return (
        <div className="card lg:card-side bg-[#F5F4F1] shadow-xl max-w-2xl mx-auto my-44">

            <figure>
                <img
                    src={photo}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h1 className='font-bold text-2xl mb-8'>Details</h1>
                <h2 className="card-title"><strong>Name:</strong> {name}</h2>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Supplier:</strong> {supplier}</p>
                <p><strong>Test:</strong> {test}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Details:</strong> {details}</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;