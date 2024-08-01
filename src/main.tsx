import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./locale/i18n";
import { ProjectContext } from "./ProjectContext";
import Axios from "./Axios.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import RTL from "./components/app/RTL.tsx";
import Auth from "./components/auth/Auth.tsx";
import Login from "./components/auth/Login.tsx";

import Code from "./components/auth/Code.tsx";
import Password from "./components/auth/Password.tsx";
import Home from "./components/app/Home.tsx";
import Search from "./components/app/Search.tsx";
import History from "./components/app/History.tsx";
import Download from "./components/app/Download.tsx";

import Profile from "./components/profile/Profile.tsx";
import Acount from "./components/profile/Acount.tsx";
import Edit from "./components/profile/Edit.tsx";
import Liked from "./components/profile/Liked.tsx";
import Bookmark from "./components/profile/Bookmark.tsx";
import MainContainer from "./components/main-container/MainContainer.tsx";
import ProfileContainer from "./components/profile/ProfileContainer.tsx";
import Products from "./components/app/Products.tsx";
import Product from "./components/app/Product.tsx";
import ResultSearch from "./components/app/ResultSearch.tsx";
import BuyBasket from "./components/app/BuyBasket.tsx";
import SplashScreen from "./components/auth/SplashScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainContainer />,
        children: [
          {
            path: "",
            element: <Home />,
            children: [],
          },

          {
            path: "/search",
            element: <Search />,
            children: [],
          },
          {
            path: "/history",
            element: <History />,
            children: [],
          },
          {
            path: "/download",
            element: <Download />,
            children: [],
          },
        ],
      },
      {
        path: "/products/:category",
        element: <Products />,
        children: [],
      },
      {
        path: "/resultsearch",
        element: <ResultSearch />,
        children: [],
      },
      {
        path: "/splash",
        element: <SplashScreen />,
        children: [],
      },
      {
        path: "/product/:id",
        element: <Product />,
        children: [],
      },
      {
        path: "/result",
        element: <ResultSearch />,
        children: [],
      },

      {
        path: "profile",
        element: <ProfileContainer />,
        children: [
          {
            path: "",
            element: <Profile />,
            children: [],
          },
          {
            path: "account",
            element: <Acount />,
            children: [],
          },
          {
            path: "liked",
            element: <Liked />,
            children: [],
          },
          {
            path: "bookmark",
            element: <Bookmark />,
            children: [],
          },
          {
            path: "edit",
            element: <Edit />,
          },
        ],
      },

      {
        path: "/buy",
        element: <BuyBasket />,
        children: [],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "password",
        element: <Password />,
      },

      {
        path: "code",
        element: <Code />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <ProjectContext.Provider value={""}>
        <React.StrictMode>
          <RTL>
            <Axios />
            <RouterProvider router={router} />
          </RTL>
        </React.StrictMode>
      </ProjectContext.Provider>
    </ThemeProvider>
  );
}
