import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Blog from "../pages/Blog/Blog";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"blogs",
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=2'),
            },
            {
                path:"blog/:blogId",
                element: <Blog></Blog>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.blogId}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>
                    },
                    {
                        path:"author",
                        element: <Author></Author>
                    }
                ]
            },
            {
                path:"bookmarks",
                element: <Bookmarks></Bookmarks>
            }
        ]
    }
])