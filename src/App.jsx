import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Layout from "./pages/layout/layout";
import SignUp from "./pages/SignUp/SignUp";
import FilterPage from "./pages/filterPage/filterPage";
import SinglePage from "./pages/singlePage/singlePage";
import PromotionPage from "./pages/promotionPage/promotionPage";
import Profile from "./pages/profile/profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/filter-data",
          element: <FilterPage />
        },
        {
          path: "/details",
          element: <SinglePage />
        },
        {
          path: "/promotion-details",
          element: <PromotionPage />
        },
        {
          path: "/profile",
          element: <Profile />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
