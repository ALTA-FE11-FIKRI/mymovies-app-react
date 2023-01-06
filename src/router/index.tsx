import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component } from "react";

import Homepage from "../pages/index";
import DetailMovie from "../pages/DetailMovie";
import Favorite from "../pages/Favorite";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/movie/:id_movie",
        element: <DetailMovie />,
    },
    {
        path: "/favorite",
        element: <Favorite />,
    },

]);

class App extends Component {
    render() {
        return <RouterProvider router={router} />;
    }
}

export default App;
