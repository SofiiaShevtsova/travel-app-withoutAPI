import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./commons/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
