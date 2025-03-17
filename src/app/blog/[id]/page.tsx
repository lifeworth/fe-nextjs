import React from 'react'
import { Card } from 'antd';
import data from '../../data';

interface IProps {
    params: {
        id: string;
    }
}
export default function page({ params }: IProps) {
    console.log(params);
    const currentData = data.find(item => item.id === Number(params.id))!;
    return (
        <Card title={currentData.title}>
            <p>{currentData.id}</p>
        </Card>
    )
}
