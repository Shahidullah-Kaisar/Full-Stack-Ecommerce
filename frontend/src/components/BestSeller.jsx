import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContextProvider';
import Title from './Title';
import ProductsItem from './ProductsItem';


const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=> {
        const bestProduct = products.filter((item)=> (item.bestseller === true));
        console.log('bestSeller',bestProduct)
        setBestSeller(bestProduct);
    },[])

    return (
        <div className=''>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'}></Title>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor deleniti.
                </p>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        bestSeller.map((item, idx)=> (
                            <ProductsItem key={idx} id={item._id} name={item.name} image={item.image} price={item.price}></ProductsItem>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default BestSeller;