import React, { useState } from "react";
import { Text, TextField, Button } from "@mui/material";
import Graph from "../components/Graph";

export function GraphAlgorithmsView() {
    const [graphWidth, setGraphWidth] = useState(10);
    const [graphHeight, setGraphHeight] = useState(10);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [goalX, setGoalX] = useState(9);
    const [goalY, setGoalY] = useState(9);

    let width = graphWidth;
    let height = graphHeight;

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', marginBottom: 10 }}>
                <p style={{marginRight: 5, marginTop: 'auto', marginBottom: 'auto'}}>Start:</p>
                <TextField style={{margin: 5, width: 60}} onChange={(e) => width = e.target.value} />
                <TextField style={{margin: 5, width: 60}} onChange={(e) => height = e.target.value} />
                <Button style={{marginLeft: 5}} onClick={() => {
                    setGraphHeight(height);
                    setGraphWidth(width);
                }}>Generate</Button>
            </div>
            <Graph height={graphHeight} width={graphWidth} start_x={0} start_y={0} goal_x={2} goal_y={3} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                <p style={{marginRight: 5, marginTop: 'auto', marginBottom: 'auto'}}>Start:</p>
                <TextField style={{margin: 5, width: 60}} />
                <TextField style={{margin: 5, width: 60}} />
            </div>
        </div>
    ) 
}