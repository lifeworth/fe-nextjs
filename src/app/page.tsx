'use client';
import React from 'react';
import { Button } from 'antd';
import '@ant-design/v5-patch-for-react-19';

const Home = () => (
    <div className="App">
        <Button type="primary" onClick={() => alert(123)}>Button</Button>
    </div>
);

export default Home;