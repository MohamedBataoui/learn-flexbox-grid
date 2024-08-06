import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../styles/Grid.css";
import "prismjs/themes/prism-tomorrow.css"; // Choisissez un autre thème si vous le souhaitez
import { FaCopy } from "react-icons/fa"; // Icône de copie

const GridPage = () => {
  const [columns, setColumns] = useState(["1fr", "1fr", "1fr", "1fr", "1fr"]);
  const [rows, setRows] = useState(["1fr", "1fr", "1fr", "1fr", "1fr"]);
  const [columnGap, setColumnGap] = useState("0px");
  const [rowGap, setRowGap] = useState("0px");

  const code = `
.container {
  display: grid;
  grid-template-columns: ${columns.join(" ")};
  grid-template-rows: ${rows.join(" ")};
  column-gap: ${columnGap};
  row-gap: ${rowGap};
}
`.trim();

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        alert("Code copied!");
      },
      (err) => {
        console.error("Error copying code: ", err);
      }
    );
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
  };

  const handleRowChange = (index, value) => {
    const newRows = [...rows];
    newRows[index] = value;
    setRows(newRows);
  };

  const addColumn = () => setColumns([...columns, "1fr"]);
  const removeColumn = () => setColumns(columns.slice(0, -1));
  const addRow = () => setRows([...rows, "1fr"]);
  const removeRow = () => setRows(rows.slice(0, -1));

  return (
    <div className="grid-page">
      <h2>CSS Grid Generator</h2>
      <div className="controls">
        <div className="control-columns">
          <div className="control-group">
            <label>
              Column 1:
              <input
                type="text"
                value={columns[0]}
                onChange={(e) => handleColumnChange(0, e.target.value)}
              />
            </label>
            <div className="button-group">
              <button className="control-button add" onClick={addColumn}>
                + Column
              </button>
              <button className="control-button remove" onClick={removeColumn}>
                - Column
              </button>
            </div>
          </div>
          {columns.slice(1).map((col, index) => (
            <div className="control-group" key={index + 1}>
              <label>
                Column {index + 2}:
                <input
                  type="text"
                  value={col}
                  onChange={(e) =>
                    handleColumnChange(index + 1, e.target.value)
                  }
                />
              </label>
            </div>
          ))}
        </div>
        <div className="control-rows">
          <div className="control-group">
            <label>
              Row 1:
              <input
                type="text"
                value={rows[0]}
                onChange={(e) => handleRowChange(0, e.target.value)}
              />
            </label>
            <div className="button-group">
              <button className="control-button add" onClick={addRow}>
                + Row
              </button>
              <button className="control-button remove" onClick={removeRow}>
                - Row
              </button>
            </div>
          </div>
          {rows.slice(1).map((row, index) => (
            <div className="control-group" key={index + 1}>
              <label>
                Row {index + 2}:
                <input
                  type="text"
                  value={row}
                  onChange={(e) => handleRowChange(index + 1, e.target.value)}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="control-gaps">
          <div className="control-group">
            <label>
              Column Gap (in px):
              <input
                type="text"
                value={columnGap}
                onChange={(e) => setColumnGap(e.target.value)}
              />
            </label>
          </div>
          <div className="control-group">
            <label>
              Row Gap (in px):
              <input
                type="text"
                value={rowGap}
                onChange={(e) => setRowGap(e.target.value)}
              />
            </label>
          </div>
          <button
            className="reset-button"
            onClick={() => {
              setColumns(["1fr", "1fr", "1fr", "1fr", "1fr"]);
              setRows(["1fr", "1fr", "1fr", "1fr", "1fr"]);
              setColumnGap("0px");
              setRowGap("0px");
            }}
          >
            Reset Grid
          </button>
        </div>
      </div>
      <div className="output">
        <div className="preview-container">
          <div
            className="container"
            style={{
              gridTemplateColumns: columns.join(" "),
              gridTemplateRows: rows.join(" "),
              columnGap: columnGap,
              rowGap: rowGap,
            }}
          >
            {Array.from({ length: columns.length * rows.length }).map(
              (_, i) => (
                <div key={i} className="cell" />
              )
            )}
          </div>
        </div>
        <div className="code-container">
          <button className="copy-button" onClick={handleCopy}>
            <FaCopy /> Copy Code
          </button>
          <pre>
            <code className="language-css">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GridPage;
