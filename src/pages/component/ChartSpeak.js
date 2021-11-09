import React, {useContext} from 'react';
import { Bar } from 'react-chartjs-2';

import {TalkMarksContext} from "../../Context/TalkMarks";






function VerticalBar() {
    const[talkMarks,setTalkMarks] = useContext(TalkMarksContext)
    const data = {
        labels: ['Object Identification', 'Words Pronunciation'],
        datasets: [
            {
                label: 'Report of Speak with SMARTE\'s',
                data: [talkMarks[1]/talkMarks[2]*100, talkMarks[4]/talkMarks[5]*100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return(
        <>
            <Bar data={data} options={options}/>
        </>
    )

}

export default VerticalBar;