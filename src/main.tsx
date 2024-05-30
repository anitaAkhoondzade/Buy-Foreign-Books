import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './locale/i18n';
import {ProjectContext} from './ProjectContext';
import Axios from './Axios.tsx';
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import RTL from "./components/app/RTL.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: []
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Root/>,
)

function Root() {
    return <ThemeProvider theme={theme}>
        <ProjectContext.Provider value={''}>
            <React.StrictMode>
                <RTL>
                    <Axios/>
                    <RouterProvider router={router}/>
                </RTL>
            </React.StrictMode>
        </ProjectContext.Provider>
    </ThemeProvider>
}