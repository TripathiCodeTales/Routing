
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import ErrorPage from './ErrorPage';
import Contact from './routes/contact';
import Root from './routes/Root';
import { loader } from './routes/loader';

function App() {
  const [count, setCount] = useState(0)

  const router = ([

    {
      path: "/page1",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
    {
      path: "/page3",
      element: <Page3 />
    },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: loader,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
      },
     ],
    }
  ]);

  return (
    <RouterProvider router={router} />
 )
  }
export default App
