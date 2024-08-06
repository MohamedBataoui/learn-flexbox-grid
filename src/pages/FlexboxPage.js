import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../styles/Flexbox.css";
import "prismjs/themes/prism-tomorrow.css"; // Choisissez un autre thème si vous le souhaitez
import { FaCopy } from "react-icons/fa"; // Icône de copie

const FlexboxPage = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");
  const [childCount, setChildCount] = useState(8);

  const code = `
.container {
  display: flex;
  flex-direction: ${flexDirection};
  flex-wrap: ${flexWrap};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
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

  return (
    <div className="flexbox-page">
      <h2>Flexbox Playground</h2>
      <div className="controls">
        <div className="control-group">
          <label>
            Child Count:
            <input
              type="number"
              value={childCount}
              onChange={(e) => setChildCount(parseInt(e.target.value, 10))}
              min="1"
              max="20"
            />
          </label>
        </div>
        <div className="control-group">
          <label>
            Flex Direction:
            <select
              value={flexDirection}
              onChange={(e) => setFlexDirection(e.target.value)}
            >
              <option value="row">Row</option>
              <option value="column">Column</option>
              <option value="row-reverse">Row Reverse</option>
              <option value="column-reverse">Column Reverse</option>
            </select>
            <p className="explanation">
              Defines the direction of the flex items in the container.
            </p>
          </label>
        </div>
        <div className="control-group">
          <label>
            Flex Wrap:
            <select
              value={flexWrap}
              onChange={(e) => setFlexWrap(e.target.value)}
            >
              <option value="nowrap">No Wrap</option>
              <option value="wrap">Wrap</option>
              <option value="wrap-reverse">Wrap Reverse</option>
            </select>
            <p className="explanation">
              Controls whether the flex items should wrap or not.
            </p>
          </label>
        </div>
        <div className="control-group">
          <label>
            Justify Content:
            <select
              value={justifyContent}
              onChange={(e) => setJustifyContent(e.target.value)}
            >
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="center">Center</option>
              <option value="space-between">Space Between</option>
              <option value="space-around">Space Around</option>
              <option value="space-evenly">Space Evenly</option>
            </select>
            <p className="explanation">
              Aligns the flex items along the main axis.
            </p>
          </label>
        </div>
        <div className="control-group">
          <label>
            Align Items:
            <select
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
            >
              <option value="stretch">Stretch</option>
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="center">Center</option>
              <option value="baseline">Baseline</option>
            </select>
            <p className="explanation">
              Aligns the flex items along the cross axis.
            </p>
          </label>
        </div>
        <div className="control-group">
          <label>
            Align Content:
            <select
              value={alignContent}
              onChange={(e) => setAlignContent(e.target.value)}
            >
              <option value="stretch">Stretch</option>
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="center">Center</option>
              <option value="space-between">Space Between</option>
              <option value="space-around">Space Around</option>
              <option value="space-evenly">Space Evenly</option>
            </select>
            <p className="explanation">
              Aligns the flex lines when there is extra space in the cross axis.
            </p>
          </label>
        </div>
      </div>
      <div className="output">
        <div className="preview-container">
          <div className="container">
            {[...Array(childCount)].map((_, i) => (
              <div key={i} className="child">
                {i + 1}
              </div>
            ))}
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
      <style jsx>{`
        .flexbox-page {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 40px; /* Ajout d'un espace entre les sections */
        }
        .control-group {
          margin: 10px;
        }
        .explanation {
          font-size: 0.8em;
          color: #666;
          margin-top: 4px;
        }
        .output {
          display: flex;
          justify-content: center;
          gap: 20px;
          width: 100%;
        }
        .preview-container,
        .code-container {
          width: 45%;
          border: 1px solid #ddd;
          padding: 10px;
          display: flex;
          flex-direction: column;
        }
        .code-container {
          background-color: #2d2d2d; /* Arrière-plan noir */
          color: white; /* Texte en blanc */
          position: relative;
        }
        .copy-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #007bff;
          border: none;
          color: white;
          padding: 5px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .copy-button svg {
          margin-right: 5px;
        }
        .copy-button:hover {
          background: #0056b3;
        }
        .container {
          display: flex;
          flex-direction: ${flexDirection};
          flex-wrap: ${flexWrap};
          justify-content: ${justifyContent};
          align-items: ${alignItems};
          align-content: ${alignContent};
          height: 100%;
          border: 1px solid #ccc;
        }
        .child {
          width: 50px;
          height: 50px;
          background-color: #007bff;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default FlexboxPage;
