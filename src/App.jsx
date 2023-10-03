import { Outlet, createBrowserRouter, useParams } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";

export const context = createContext();

const AppLayout = () => {
  const params= useParams()
  const [search,setSearch] = useState('')
  const [page, setPage] = useState(params.page);
  return (
    <>
      <context.Provider value={{search,setSearch,page,setPage}}>
        <Navbar />
        <Outlet />
      </context.Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "page/:page",
        element: <Home />,
      },
    ],
  },
]);

export default router;
