import { Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Cryptocurrencies from "./Components/Cryptocurrencies";
import FirstPage from "./Components/FirstPage";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <FirstPage />,
        },
        { path: "cryptocurrencies", element: <Cryptocurrencies /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={routes}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
