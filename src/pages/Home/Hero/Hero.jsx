import React from 'react';

const Hero = () => {
    return (
        <div className='container mx-auto px-32'>
            <div className=' flex justify-between items-center bg-[#F3F3F3] py-10 px-20 rounded-xl '> 
            <div>
                <h1 className='text-4xl w-105 pb-10 font-bold'>
                    Books to freshen up your bookshelf
                </h1>
                <div>
                    <button className='btn bg-[#23BE0A] px-10 text-white border-none rounded-xl'>View The List</button>
                </div>
            </div>
            <div>
                <img className='w-full object-cover' src="src/assets/pngwing 1.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Hero;