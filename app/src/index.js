import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/page1'
import page2 from './page/page2'
import Page3 from './page/page3'
import Page4 from './page/page4'
import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom"
import Page2 from './page/page2';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/soil",
    element:<Page3/>
  },
  {
    path:"/picture",
    element:<Page2/>
  },
  {
    path:"/soils",
    element:<Page4/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

reportWebVitals();
