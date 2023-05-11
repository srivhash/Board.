import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


import { Line } from 'react-chartjs-2';
import styled from '@emotion/styled';
ChartJS.register(CategoryScale);
ChartJS.register(LinearScale);
ChartJS.register(PointElement);
ChartJS.register(LineElement);
ChartJS.register(Title);
ChartJS.register(Tooltip);
ChartJS.register(Legend);

const Charts = () => {


    let options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
        },
        aspectRatio: 6,
        scales: {
            x: {
                grid: {
                    display: false,
                    // alignToPixels: true,
                },
                // title: {
                //     display: true,
                //     text: 'Weeks',
                // },
            },
            y: {
                grid: {
                    display: true,

                },

                // title: {
                //     display: true,
                //     text: 'Number of Users',
                // },
            },
        },

    };

    const labels = ['', '', 'Week 1', '', '', 'Week 2', '', '', 'Week 3', '', '', 'Week 4', ''];


    let line_data = {
        labels,

        datasets: [
            {
                label: 'Guest',
                data: labels.map(() => 500 * Math.random()),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderRadius: 10,
            },
            {
                label: 'User',
                data: labels.map(() => 350 * Math.random()),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],

    };
    return (
        <>
            <Line options={options} data={line_data} />
            {/* <img src="https://example.com/pie-chart.png" alt="Pie chart"></img> */}
            {/* <img src="https://www.mathsisfun.com/data/images/pie-charts.svg" alt="Pie chart"> */}
            {/* </img> */}
        </>
    )
};
export { Charts };