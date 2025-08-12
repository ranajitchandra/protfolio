import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../shared/ErrorPage";
import Home from "../components/home/Home";



export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
            ]
        },
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
        }
    ]
)


