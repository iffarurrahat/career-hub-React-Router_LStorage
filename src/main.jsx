import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AppliedJob from './components/AppliedJob/AppliedJob';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FeaturedJobDetails from './components/Featured/FeaturedJobDetails';
import Statistics from './components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('/jobs.json') // only load the data you need. do not load all data
      },
      {
        path: '/job/:id',
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader: () => fetch('/jobs.json') // do not load all data. load only what you need
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
