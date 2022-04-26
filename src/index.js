import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

