import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ProfileChild from './components/ProfileChild.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductsContainer from './components/ProductsContainer.jsx';
import ProductProfile from './components/ProductProfile.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProductsContainer/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/profile',
    element:<Profile/>,
    children:[
      {
        path:'/profile/:profileId',
        element:<ProfileChild/>
      },
    ]
  },
  // {
  //   path:'/products',
  //   element:<Products/>
  // },
  {
    path:'/productprofile',
    element:<ProductProfile/>
  },
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
