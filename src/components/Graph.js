import React, { useState} from 'react';

const NODE_TYPES = {
    UNVISITED: "white",
    VISITED: "yellow",
    START: "green",
    GOAL: "red"
}

function Square(props) {

    // `width:20; height:20; background-color:${props.type}; outline: 1px solid black; display: inline-block`

    return (
        <div style={{
            width: 20,
            height: 20,
            backgroundColor: props.type,
            outline: '1px solid black',
            display: 'inline-block'
        }} ></div>
    )
}

export default function Graph(props){
    const [graphDim, setGraphDim] = useState({
        height: props.height,
        width: props.width
    })
    const [start, setStart] = useState({
        x: props.start_x,
        y: props.start_y
    })
    const [goal, setGoal] = useState({
        x: props.goal_x,
        y: props.goal_y
    })

    let grid = new Array(graphDim.height);

    for (let i = 0; i < graphDim.height; i++) {
        grid[i] = new Array(graphDim.width)
        for (let j = 0; j < graphDim.width; j++) {
            grid[i][j] = <Square type={NODE_TYPES.UNVISITED} />;
        }
    }

    grid[start.y][start.x] = <Square type={NODE_TYPES.START} />
    grid[goal.y][goal.x] = <Square type={NODE_TYPES.GOAL} />

    const [graph, setGraph] = useState(grid)

    return (
        graph.map(row => {
            return <div>
                {row}
            </div>
        })
    )
}