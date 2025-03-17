import React from 'react'
import banner4 from '@/public/4.png'
import Hero from '@/src/app/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reliability'
};

export default function page() {
    return (
        <div>
            <Hero imgUrl={banner4} altText={'banner4'} content={'Hi Scale!'} />
        </div>
    )
}
