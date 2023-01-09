import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const App = () => {
    return <RouterProvider router={router}/>
}

export default App;
