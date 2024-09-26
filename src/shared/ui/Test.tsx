import React from "react";

export const Test: React.FC = () => {
    const list: string[] = Array.from(Array(50).keys()).map((item) => item.toString())
    return (
      <ul title="qwe">
        {list.map((item, index) =>
          <li key={index.toString()} style={{textAlign:"left"}}>{item}</li>
        )}
      </ul>
    );
  }