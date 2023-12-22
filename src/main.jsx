import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import App from './App.jsx';
import Layout from './components/Layout/Layout.jsx'; // Assuming you have a Layout component
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'; // Assuming you have an About component
import './index.css';
import Contact from './components/Contact/Contacts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
