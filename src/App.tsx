import React from "react";
import { css } from "linaria";

// Write your styles in `css` tag
const header = css`
  text-transform: uppercase;
  color: red;
`;

export const App = () => (
  <div>
    <h1 className={header}>Hello world</h1>
  </div>
);
