import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import useData from '../../hooks/useData';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const { books } = useData();

    return (
        <div className="container mx-auto px-4 lg:px-24 py-12">
            <div className="bg-base-200 rounded-3xl py-8 mb-12 text-center">
                <h2 className="text-3xl font-bold">Pages to Read</h2>
                <p className="text-gray-500 mt-2">A visual representation of book lengths</p>
            </div>

            <div className="w-full h-[300px] md:h-[500px] bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={books}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                        <XAxis dataKey="bookName" tick={{ fontSize: 12 }} interval={0} angle={-30} textAnchor="end" height={80} />
                        <YAxis />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ color: '#343a40', fontWeight: 'bold' }}
                        />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {books.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PagesToRead;