import React, { useState } from "react";
import { Text, TextField, Button, MenuItem, Select } from "@mui/material";
import Graph from "../components/Graph";


export function GraphAlgorithmsView() {
    const [graphWidth, setGraphWidth] = useState(10);
    const [graphHeight, setGraphHeight] = useState(10);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [goalX, setGoalX] = useState(9);
    const [goalY, setGoalY] = useState(9);
    const [initiateAlgo, setInitiateAlgo] = useState(false);
    const [algo, setAlgo] = useState("DFS");

    let width = graphWidth;
    let height = graphHeight;
    let goal_x = goalX;
    let goal_y = goalY;
    let start_x = startX;
    let start_y = startY;

    return (
        <>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={algo}
                label="Algo"
                onChange={(event) => {setAlgo(event.target.value)}}
                style={{marginTop: 10}}
            >
                <MenuItem value={'DFS'}>DFS</MenuItem>
                <MenuItem value={'BFS'}>BFS</MenuItem>
                <MenuItem value={'UCS'}>Dijkstra's Algorithm</MenuItem>
                <MenuItem value={'A*'}>A* Algorithm</MenuItem>
            </Select>
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', marginBottom: 10, marginTop: 50 }}>
                <p style={{marginRight: 5, marginTop: 'auto', marginBottom: 'auto'}}>Board Dimensions:</p>
                <TextField style={{margin: 5, width: 60}} onChange={(e) => width = e.target.value} />
                <TextField style={{margin: 5, width: 60}} onChange={(e) => height = e.target.value} />
                <Button style={{marginLeft: 5}} onClick={() => {
                    setGraphHeight(height);
                    setGraphWidth(width);
                }}>Generate</Button>
            </div>
            <Graph height={graphHeight} width={graphWidth} start_x={startX} start_y={startY} goal_x={goalX} goal_y={goalY} runAlgo={initiateAlgo} algo={algo} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                <p style={{marginRight: 5, marginTop: 'auto', marginBottom: 'auto'}}>Start:</p>
                <TextField style={{margin: 5, width: 60}} onChange={(e) => start_x = e.target.value} />
                <TextField style={{margin: 5, width: 60}} onChange={(e) => start_y = e.target.value} />
                <Button style={{marginLeft: 5}} onClick={() => {
                    setStartX(start_x);
                    setStartY(start_y);
                }}>Set</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                <p style={{marginRight: 5, marginTop: 'auto', marginBottom: 'auto'}}>Goal:</p>
                <TextField style={{margin: 5, width: 60}} onChange={(e) => goal_x = e.target.value} />
                <TextField style={{margin: 5, width: 60}} onChange={(e) => goal_y = e.target.value} />
                <Button style={{marginLeft: 5}} onClick={() => {
                    setGoalX(goal_x);
                    setGoalY(goal_y);
                }}>Set</Button>
            </div>
            <Button onClick={() => setInitiateAlgo(true)}>Start</Button>
        </>
    ) 
}