import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './component/Home';
import Contact from './component/subComponet/Contact';
import About from './component/subComponet/About';
import Certificate from './component/subComponet/Certificate';
import Project from './component/subComponet/Project';
import More from './component/subComponet/More';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    },
    {
      path: "home",
      Component:Home,

    },
    {
      path: "contact",
      Component:Contact,
      },
      {
        path:"about",
       Component:About,
      },
      {
        path:"certificate",
        Component:Certificate
      }
      ,{
        path:"project",
        Component:Project
      }
    ,{
      path:"more",
      Component:More
    }
    
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
