import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App.tsx";
import Counter from "./components/Counter.tsx";
import Header from "./components/Header.tsx";
import AccountsList from "./components/AccountsList.tsx";
import PortfolioList from "./components/PortfolioList.tsx";
import AccountEdit from "./components/AccountEdit.tsx";

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
        element: <AccountsList/>
    },
    {
        path: `/accounts/:id`,
        element: <AccountEdit/>
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
