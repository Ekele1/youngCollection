import { RouterProvider, createHashRouter,Outlet } from "react-router-dom";
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

const AppLayout = () =>(
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footercomp />
  </div>
)

const route = createHashRouter([
{
    path: "/",
    element: <AppLayout />,
    children: [
      {path: '/',element: <Home />},
      {path: 'men',element: <MenCollection items={Products}/>},
      {path: 'women',element: <Collection items={Products}/>},
      {path: 'detail/:id',element: <DetailPage items={Products}/>},
      {path: 'cart',element: <Cart />},
      {path: 'order',element: <StartOrderPage />},
      {path: 'contact',element: <ContactUs />},
      {path: 'checkout',element: <CheckoutPage />},
    ]
},

]);

function Route() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default Route;
