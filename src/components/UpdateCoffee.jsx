import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffees = useLoaderData()
    const { _id, name, price, supplier, test, category, details, photo } = coffees

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const price = form.price.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const coffee = { name, price, supplier, test, category, details, photo }
        console.log(coffee);

         // check for empty fields
        if (!name || !price || !supplier || !test || !category || !details || !photo) {
            Swal.fire({
                title: "Error",
                text: "Please fill all the fields correctly.",
                icon: "error",
                confirmButtonText: "Okay",
            });
            return;
        }


        //send data to server
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className="bg-[#F4F3F0] max-w-6xl mx-auto p-28 text-center rounded-md mt-20">
            <h1 className="text-2xl font-bold mb-5">Update Coffee Details</h1>
            <p className="mb-9 lg:px-20 text-xs">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className="flex gap-3">
                    <label className="form-control w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-" />
                    </label>
                    <label className="form-control w-1/2 ">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input type="text" name="price" defaultValue={price} placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form row */}
                <div className="flex gap-3">
                    <label className="form-control w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Type here" className="input input-bordered w-" />
                    </label>
                    <label className="form-control w-1/2 ">
                        <div className="label">
                            <span className="label-text">Test</span>
                        </div>
                        <input type="text" name="test" defaultValue={test} placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form row */}
                <div className="flex gap-3">
                    <label className="form-control w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" defaultValue={category} placeholder="Type here" className="input input-bordered w-" />
                    </label>
                    <label className="form-control w-1/2 ">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" defaultValue={details} placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form row */}
                <div>
                    <label className="form-control w-full mb-5">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Type here" className="input input-bordered" />
                    </label>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default UpdateCoffee;