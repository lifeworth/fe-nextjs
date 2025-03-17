import React from 'react'
import banner1 from '@/public/1.png'
import Hero from '@/src/app/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
};
export default function page() {
  return (
    <Hero imgUrl={banner1} altText={'banner1'} content={'Welcome to our site!'} />
  )
}
