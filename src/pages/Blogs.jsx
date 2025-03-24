import React, { useState } from 'react';
import BlogNavbar from '../components/BlogNavbar';
import BlogList from './BlogList';

const Blogs = () => {

    return (
        <>
            <BlogNavbar />
            <BlogList />
        </>

    );
};

export default Blogs;