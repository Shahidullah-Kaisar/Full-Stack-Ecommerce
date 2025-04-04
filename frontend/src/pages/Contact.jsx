import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
    return (
        <div>
            <div className='text-2xl text-center py-10 border-t'>
                <Title text1={'CONTACT'} text2={'US'}></Title>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-10 my-10 mb-28'>
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <p className='text-gray-600'>5454 Dhaka <br /> Savar 1250,Dhaka,Bangladesh</p>
                    <p className='text-gray-600'>Tel: 415 555-1234 <br /> Email: sh2002@gmail.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at BuildIt</p>
                    <p className='text-gray-600'>Learn more about our teams and job openings</p>
                    <button className='border border-black px-8 py-2 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                </div>
            </div>
            <NewsletterBox></NewsletterBox>
        </div>
    );
};

export default Contact;