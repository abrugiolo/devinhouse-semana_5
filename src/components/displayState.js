import React from "react";

export const DisplayState = (values) => (
  <div style={{ margin: "1rem 0" }}>
    <h3 style={{ fontFamily: "monospace" }} />
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: "1rem",
        padding: "1rem",
      }}
    >
      <strong>values</strong> = {JSON.stringify(values, null, 2)}
    </pre>
  </div>
);
