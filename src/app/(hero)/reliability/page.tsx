import React from 'react'
import banner3 from '@/public/3.png'
import Hero from '@/src/app/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reliability'
};

export default function page() {
    return (
        <div>
            <Hero imgUrl={banner3} altText={'banner3'} content={'Reliability!'} />
        </div>
    )
}
