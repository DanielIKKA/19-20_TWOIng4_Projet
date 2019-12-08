import React, { PureComponent } from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer, Sector} from 'recharts';

const COLORS = {
    dark: ['#FBB2F3', '#E5B752', '#45A196', '#78BEFF'],
    light: ['#DA5367', '#E5B752', '#45A196', '#646ECD']
};

const renderActiveShape = (props) => {
    const {
        cx, cy, fill, payload, innerRadius, outerRadius, startAngle, endAngle
    } = props;

    return (
        <g>
            <text x={cx} y={cy-10} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <text x={cx} y={cy+10} dy={8} textAnchor="middle" fill={fill}>{payload.value}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
        </g>
    );
};

export default class CustomPieChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

    state = {
        activeIndex: undefined,
    };

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index
        });
    };

    onPieOut = () => {
        this.setState({
            activeIndex: undefined
        });
    };

    render() {
        const {mode, data} = this.props;

        return (
            <div className={'mb-5'} style={{width : '100%', height: 300}} >
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx={'50%'}
                            cy={'50%'}
                            innerRadius={115}
                            outerRadius={130}
                            paddingAngle={5}
                            dataKey="value"

                            activeIndex={this.state.activeIndex}
                            activeShape={renderActiveShape}
                            onMouseEnter={this.onPieEnter}
                            onMouseOut={this.onPieOut}
                        >
                            {
                                data.map((entry, index) =>
                                    <Cell key={`cell-${index}`}
                                          fill={ mode ? COLORS.dark[index % COLORS.dark.length] : COLORS.light[index % COLORS.light.length]}
                                          strokeWidth={0}/>)
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
