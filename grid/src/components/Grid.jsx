import React, { useState } from "react";

function Grid() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [grid, setGrid] = useState();
  const [generate, setGenerate] = useState(false);
  const handleClick = (rows, cols) => {
    setGenerate(true);
    setGrid(Array(rows * cols).fill(0));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        gap: "1rem",
      }}
    >
      <input
        type="number"
        placeholder="Enter number of rows"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number of columns"
        value={cols}
        onChange={(e) => setCols(e.target.value)}
      />
      <button onClick={() => handleClick(rows, cols)}>Generate</button>
      <div>
        {generate &&
           Array.from({ length: rows })
            .fill(0)
            .map((row, rowIndex) => (
              <span >
                { Array.from({ length: cols })
                  .fill(0)
                  .map((col, colIndex) => (
                    <span style={{height:"1rem", width:"1rem", border:"1px solid black", padding:"10px"}}>{colIndex}</span>
                  ))}
                  <br></br>
              </span>
            ))}
      </div>
    </div>
  );
}

export default Grid;
