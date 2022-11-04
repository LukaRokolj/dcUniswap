import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const Token = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center pt-24 pb-8'>
        <div className='flex w-1/2 h-[80vh] rounded-xl bg-black border background-blur-lg'>
            <ResponsiveLine
                colors={{ scheme: 'red_purple' }}
                borderColor = "#00FF00"
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={2}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 1,
                        itemTextColor: "#FFF",
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgb(255,255,255)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    </div>
  )
}

const data = [
    {
      "id": "japan",
      "color": "hsl(222, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 217
        },
        {
          "x": "helicopter",
          "y": 274
        },
        {
          "x": "boat",
          "y": 31
        },
        {
          "x": "train",
          "y": 168
        },
        {
          "x": "subway",
          "y": 185
        },
        {
          "x": "bus",
          "y": 168
        },
        {
          "x": "car",
          "y": 1
        },
        {
          "x": "moto",
          "y": 17
        },
        {
          "x": "bicycle",
          "y": 290
        },
        {
          "x": "horse",
          "y": 286
        },
        {
          "x": "skateboard",
          "y": 169
        },
        {
          "x": "others",
          "y": 24
        }
      ]
    }    
  ]

export default Token