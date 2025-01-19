import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)
    console.log(loadedUser);

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
                fetch(`https://coffee-store-server-one-murex.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers)
                        }
                    })


            }
        });
    }

    return (
        <div className="overflow-x-auto h-screen">
            <h1 className='text-4xl font-bold text-center my-9'>Users found: {loadedUser.length}</h1>
            <table className="table">
                {/* head */}
                <thead className='bg-base-200'>
                    <tr>
                        <th>Serial no</th>
                        <th>Email</th>
                        <th>Created at</th>
                        <th>Last Sign in</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastSignIn}</td>
                            <td>
                                <div className='flex gap-1 '>
                                    <button className="btn btn-circle btn-xs tooltip" data-tip="Edit">
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-circle btn-xs tooltip" data-tip="Delete" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;