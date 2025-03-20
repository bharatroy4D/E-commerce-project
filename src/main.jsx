import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Route/Route.jsx';
import Products from './Components/Products/Products.jsx';
import BecomeSeller from './Components/BecomeSeller/BecomeSeller.jsx';
import HelpSupport from './Components/HelpSupport/HelpSupport.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path:'/',
        element:<Products/>
      },
      {
        path:'/become',
        element:<BecomeSeller/>
      },
      {
        path:'/help',
        element:<HelpSupport/>,
      },
      {
        path:'/sign',
        element:<SignUp/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
