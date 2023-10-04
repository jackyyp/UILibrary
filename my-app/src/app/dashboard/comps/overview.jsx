"use client";

import {
	Bar,
	Cell,
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import { useToast } from "@/components/ui/use-toast";
import { useCallback, useEffect, useState } from "react";
//mockup data, should be json from backend.
//not limited to bar chart. Checkout:  https://recharts.org/en-US/examples

// data from backend.
const data = [
	{
		name: "Jan",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Feb",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Mar",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Apr",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "May",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Jun",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Jul",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Aug",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Sep",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Oct",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Nov",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: "Dec",
		total: Math.floor(Math.random() * 5000) + 1000,
	},
];

export function Overview() {
	// this is a rechart component, contained in a shadcn Card.
	const { toast } = useToast();
	const [activeIndex, setActiveIndex] = useState(-1);

	const handleClick = (entry, index) => {
		setActiveIndex(index);
		toast({
			description: `For ${data[index].name}: $${data[index].total}`,
		});
	};

	return (
		<ResponsiveContainer width="100%" height={350}>
			<BarChart data={data}>
				<XAxis
					dataKey="name"
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `$${value}`}
				/>

				<Bar dataKey="total" onClick={handleClick}>
					{data.map((item, index) => (
						<Cell
							key={`cell-${index}`}
							fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
							radius={[4, 4, 0, 0]}
							cursor="pointer"
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}
