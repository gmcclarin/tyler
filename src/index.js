// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOM from "react-dom/client";
import Home from './pages/Home';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OntheJob from './pages/OntheJob';
import ServicesPage from './pages/ServicesPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <ServicesPage />
  },
  {
    path: "/onthejob",
    element: <OntheJob />
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

