import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
    return (
        <div>
            <div className='text-3xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'}></Title>
            </div>
            <div className='flex flex-col md:flex-row gap-16 mt-10'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis id dolorem laboriosam rem. Dolorum, hic, ab ad nulla vel iure ducimus dolores rerum veniam eius quisquam magni corrupti consectetur a id veritatis, harum eum! Perferendis officia culpa quisquam voluptatem.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam quidem modi suscipit mollitia aliquam tempora optio nemo commodi iste et saepe est, fuga fugit libero voluptatem ab! Deserunt, ad?</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis debitis labore molestiae non ut quia officiis accusamus nesciunt voluptatem?</p>
                </div>
            </div>

            <div className='text-xl py-6'>
                    <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
            </div>
            
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat quibusdam officiis illum delectus officia doloremque placeat iste, itaque dolorum.</p>
                </div>
                <div className='border px-10 md:px-16 py-6 sm:py-12 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat quibusdam officiis illum delectus officia doloremque placeat iste, itaque dolorum.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat quibusdam officiis illum delectus officia doloremque placeat iste, itaque dolorum.</p>
                </div>
            </div>
            <NewsletterBox></NewsletterBox>
        </div>
    );
};

export default About;