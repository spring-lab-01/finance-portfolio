import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App.tsx";
import Counter from "./components/Counter.tsx";
import Header from "./components/Header.tsx";
import Accounts from "./components/Accounts.tsx";
import EditAccount from "./components/button/EditAccount.tsx";
import PortfolioList from "./components/PortfolioList.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/counter",
        element: <Counter/>
    },
    {
        path: "/accounts",
        element: <Accounts/>
    },
    {
        path: "/account/:id",
        element: <EditAccount/>
    },
    {
        path: "/portfolios",
        element: <PortfolioList/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
  </React.StrictMode>,
)
