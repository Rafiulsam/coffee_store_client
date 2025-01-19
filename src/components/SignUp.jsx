import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handelSignUp = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(userCredential => {
                const createdAt = userCredential.user?.metadata?.creationTime
                // const name = userCredential.user?.
                const user = { email, createdAt: createdAt }
                console.log(userCredential.user);
                fetch('https://coffee-store-server-one-murex.vercel.app/users', {
                    method: "post",
                    headers: { "content-type": 'application/json' },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.acknowledged){
                            Swal.fire({
                                title: "Good job!",
                                text: "User Created Successfully!",
                                icon: "success"
                              });
                        }
                    })

                // form.reset()

            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen max-w-6xl mx-auto rounded-md my-20">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;