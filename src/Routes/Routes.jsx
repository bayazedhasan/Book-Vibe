import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import PagesToRead from '../pages/PagesToRead/PagesToRead';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignInUp/SignIn';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:'/',
            Component:Home,
        },
        {
          path:'/ListedBooks',
          element:<ListedBooks></ListedBooks>
        },
        {
          path:'/PagesToRead',
          element:<PagesToRead></PagesToRead>
        },
        

    ]
  },
  {
          path:'/signin',
          element:<SignIn></SignIn>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },

]);