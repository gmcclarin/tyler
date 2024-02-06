import React from 'react';

import './index.css';
import App from './App';
import * as ReactDOM from "react-dom/client";

import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <div>HELLO WORLD</div>
  },
  {
    path : "/contact",
    element : <div>CONTACT STUFF</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

