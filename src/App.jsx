import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Layout from "./pages/layout/layout";
import SignUp from "./pages/SignUp/SignUp";
import FilterPage from "./pages/filterPage/filterPage";
import SinglePage from "./pages/singlePage/singlePage";
import PromotionPage from "./pages/promotionPage/promotionPage";
import Profile from "./pages/profile/profile";
import Register from "./pages/landlord/register/register";
import Contact from "./pages/contact/contact";
import LandlordProfile from "./pages/landlord/profile/landlordprofile";
import Transport from "./pages/TransportPage/transport";
import UserFaq from "./pages/faqPage/userfaq";

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
          path: "/registration-page-landlord",
          element: <Register />
        },
        {
          path: "/filter-data",
          element: <FilterPage />
        },
        {
          path: "/details/:id",
          element: <SinglePage />
        },
        {
          path: "/promotion-details/:id",
          element: <PromotionPage />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/contact-page",
          element: <Contact />
        },
        {
          path: "/Transport-help",
          element: <Transport />
        },
        {
          path: "/faq-page",
          element: <UserFaq />
        },
      ]
    },
    {
      path: "/profile-landlord",
      element: <LandlordProfile />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
