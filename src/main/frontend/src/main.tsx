import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App.tsx";
import Counter from "./components/Counter.tsx";
import Header from "./components/Header.tsx";
import AccountsList from "./components/AccountsList.tsx";
import Myprofile from "./components/Myprofile.tsx";
import AccountEdit from "./components/AccountEdit.tsx";
import AccountCreate from "./components/AccountCreate.tsx";
import {Box, Container} from "@mui/material";

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
        path: "/accounts/create",
        element: <AccountCreate/>
    },
    {
        path: `/accounts/:id`,
        element: <AccountEdit/>
    },
    {
        path: "/myprofile",
        element: <Myprofile/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
              <Header />
              <RouterProvider router={router} />
          </Box>
      </Container>
  </React.StrictMode>,
)
