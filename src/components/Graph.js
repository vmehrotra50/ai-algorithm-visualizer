import React, { useState, useEffect } from 'react';
import { dfsStep } from '../algorithms/search';

export const NODE_TYPES = {
    UNVISITED: "white",
    VISITED: "yellow",
    PATH: "blue",
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

    const [isAlgorithmRunning, setAlgorithmRunning] = useState(false);

    let blank_grid = new Array(graphDim.height);

    for (let i = 0; i < graphDim.height; i++) {
        blank_grid[i] = new Array(graphDim.width)
        for (let j = 0; j < graphDim.width; j++) {
            blank_grid[i][j] = NODE_TYPES.UNVISITED;
        }
    }

    blank_grid[start.y][start.x] = NODE_TYPES.START
    blank_grid[goal.y][goal.x] = NODE_TYPES.GOAL
    const [graph, setGraph] = useState(blank_grid);

    useEffect(() => {
        resetBoardState();
        // if (!isAlgorithmRunning) initiateDfs();
    }, []);


    const resetBoardState = () => {
        let blank_grid = new Array(graphDim.height);

        for (let i = 0; i < graphDim.height; i++) {
            blank_grid[i] = new Array(graphDim.width)
            for (let j = 0; j < graphDim.width; j++) {
                blank_grid[i][j] = NODE_TYPES.UNVISITED;
            }
        }

        blank_grid[start.y][start.x] = NODE_TYPES.START
        blank_grid[goal.y][goal.x] = NODE_TYPES.GOAL

        setGraph(blank_grid)
    };

    useEffect(() => {
        setGraphDim({
            width: props.width,
            height: props.height
        });
        resetBoardState();
    }, [props]);

    const initiateDfs = () => {
        let visited = new Set();
        let stack = new Array();
        setAlgorithmRunning(true);
        stack.push(start)

        const interval = setInterval(() => {
            let finished = dfsStep(visited, stack, graph, setGraph, start, goal);
            console.log(stack)

            if (finished) {
                setAlgorithmRunning(false);
                clearInterval(interval);
            }
        }, 1000);
    }

    return (
        <>
            {graph.map(row => {
                return (
                    <div>
                        {row.map(val => {
                            return <Square type={val} />
                        })}
                    </div>
                )
            })}
            { isAlgorithmRunning ? <p>running...</p> : <p></p> }
        </>
    )
}