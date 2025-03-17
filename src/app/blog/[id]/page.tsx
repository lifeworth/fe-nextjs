import React from 'react'
import { Card } from 'antd';
import data from '../../data';

interface IProps {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: IProps) {
    return {
        title: `博客详情-${params.id}`
    }
}
export default function page({ params }: IProps) {
    console.log(params);
    const currentData = data.find(item => item.id === +params.id)!;
    return (
        <Card title={currentData.title}>
            <p>{currentData.id}</p>
        </Card>
    )
}
