import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, supplier, photo } = coffee

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl">
            <figure>
                <img
                    className='h-40 w-32'
                    src={photo}
                    alt="Coffee" />
            </figure>
            <div className="flex w-full justify-between p-9">
                <div>
                    <h2 className="card-title lg:text-base text-xs mb-3"><strong>Name:</strong> {name}</h2>
                    <p className='lg:text-base text-xs mb-3'><strong>Supplier:</strong> {supplier}</p>
                    <p className='lg:text-base text-xs'><strong>Price:</strong> ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <Link to={`/coffeeDetails/${_id}`}>
                            <button className="btn btn-neutral btn-sm btn-square "><FontAwesomeIcon icon={faEye} /></button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-neutral btn-sm btn-square "><FontAwesomeIcon icon={faPen} /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square btn-error "><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;