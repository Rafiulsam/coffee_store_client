import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignIn = () => {

    const { signIn } = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(userCredential=>{
                console.log(userCredential.user);
                const user= {
                    email,
                    lastSignIn: userCredential.user?.metadata?.lastSignInTime
                }
                fetch('https://coffee-store-server-one-murex.vercel.app/users',{
                    method:"PATCH",
                    headers:{"content-type": "application/json"},
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                })
            })
            .catch(error=>{
                console.error(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;