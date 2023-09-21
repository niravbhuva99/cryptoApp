import Navbar from "./Components/Navbar";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Cryptocurrencies from "./Components/Cryptocurrencies";
import FirstPage from "./Components/FirstPage";
import Exchanges from "./Components/Exchanges";
import Error from "./Components/Error";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <FirstPage />,
        },
        { path: "/cryptocurrencies", element: <Cryptocurrencies /> },
        { path: "/exchanges", element: <Exchanges /> },
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
