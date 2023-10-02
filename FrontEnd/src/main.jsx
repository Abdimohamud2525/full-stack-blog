import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import SingUpPage from './pages/SingUpPage.jsx';
import { AuthProvider } from './Context.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
// import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/Login",
        element: <LoginPage/>,
      },
      {
        path: "/SingUp",
        element: <SingUpPage/>,
      },
      {
        path: "/Header",
        element: <LoginPage/>,
      },
      {
        path: "/createPost",
        element: <CreatePostPage/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <Toaster/> */}
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
