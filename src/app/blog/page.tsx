import React from 'react'
import type { Metadata } from 'next'
import BlogList from '../components/blogList';


export const metadata: Metadata = {
    title: 'Blog',
};
export default function page() {
    return (
        <BlogList />
    )
}
