import { useState, useEffect } from "react";
import styles from './BarChart.module.css';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    ArcElement,
     Tooltip, 
     Legend
    );

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels:['Stage-1-NREM', 'Stage-2-NREM', 'Stage-3-NREM', 'Stage-4-REM'],
            datasets: [
                {
                    label: 'Duration of Sleep Stages (%)',
                    data: [5, 45, 25, 25],
                    backgroundColor: [
                        'rgb(255, 214, 255)',
                        'rgb(173, 233, 255)',
                        'rgb(200, 182, 255)',
                        'rgb(0, 24, 69)'
                    ]
                }
            ]
        })
    })



    return(
        <>
        <div className={styles.sleepStages}>
        <Pie data={chartData} options={chartOptions} />
        </div>

        </>
    )
}