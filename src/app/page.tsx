'use client';
import React from 'react';
import { Button } from 'antd';
import '@ant-design/v5-patch-for-react-19';

const Home = () => (
    <div className="flex mt-6 p-6 bg-gray-500 text-white rounded-lg">
        @children
    </div>
);

export default Home;