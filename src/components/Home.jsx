import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadedCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffee)


    return (
        <div className='m-20'>
            <h1 className='text-4xl font-bold text-center mb-12'>Our Popular Product</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;