import React from 'react'
import banner2 from '@/public/2.png'
import Hero from '@/src/app/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Performance'
};

export default function page() {
    return (
        <div>
            <Hero imgUrl={banner2} altText={'banner1'} content={'Performance!'} />
        </div>
    )
}
