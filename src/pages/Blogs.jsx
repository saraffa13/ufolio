import React, { useState } from 'react';
import BlogNavbar from '../components/BlogNavbar';
import BlogDisplay from './BlogDisplay';

const Blogs = () => {

    return (
        <>
            <BlogNavbar />
            <BlogDisplay/>
        </>

    );
};

export default Blogs;