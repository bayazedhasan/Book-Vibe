import React from 'react';

const Hero = () => {
    return (
        <div className='container mx-auto px-4 lg:px-24 my-10'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center bg-base-200/50 py-16 px-8 lg:px-24 rounded-3xl gap-12 hero-pattern relative overflow-hidden'>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

                <div className='lg:w-1/2 z-10 space-y-8 text-center lg:text-left'>
                    <h1 className='text-4xl lg:text-6xl font-extrabold leading-tight text-base-content'>
                        Books to <span className="text-primary">freshen up</span> your bookshelf
                    </h1>
                    <p className="text-base-content/70 text-lg max-w-lg mx-auto lg:mx-0">
                        Explore our curated collection of diverse genres to reignite your passion for reading today.
                    </p>
                    <div>
                        <button className='btn btn-primary text-white px-8 h-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg font-bold'>
                            View The List
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2 z-10 flex justify-center lg:justify-end'>
                    <img
                        className='w-full max-w-sm rounded-lg drop-shadow-2xl hover:rotate-2 transition-transform duration-500'
                        src="assets/pngwing 1.png"
                        alt="Bookshelf Hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;