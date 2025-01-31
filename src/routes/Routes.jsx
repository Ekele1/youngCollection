import { RouterProvider, createHashRouter, Outlet } from "react-router-dom";
import Home from "../pages/homepage";
import Header from "../components/header";
import Footercomp from "../components/footer";
import ContactUs from "../pages/contact";
import MenCollection from "../components/menHome";
import Collection from "../components/collection";
import DetailPage from "../components/detail";
import Cart from "../components/cartPage";
import StartOrderPage from "../components/startOrder";
import CheckoutPage from "../components/checkout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Products } from "../components/data";
import AdminHome from "../admin/adminPage/adminHomePage";
import AddProductPage from "../admin/adminPage/addProductPage";
import ProductlistPage from "../admin/adminPage/productlistPage";

const AppLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footercomp />
  </div>
);

const AdminLayout = () => (
  <div>
    {/* <Adminheader /> */}
    <main>
      <Outlet />
    </main>
  </div>
);

const route = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "men", element: <MenCollection items={Products} /> },
      { path: "women", element: <Collection items={Products} /> },
      { path: "detail/:id", element: <DetailPage items={Products} /> },
      { path: "cart", element: <Cart /> },
      { path: "order", element: <StartOrderPage /> },
      { path: "contact", element: <ContactUs /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "addproduct", element: <AddProductPage />},
      { path: "productlist", element: <ProductlistPage />},
    ],
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);

function Route() {
  return <RouterProvider router={route} />;
}

export default Route;
