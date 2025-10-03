import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <PuffLoader size={100} color='#F92FD3'></PuffLoader>
        </div>
    );
};

export default Loader;