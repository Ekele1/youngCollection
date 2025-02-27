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
import EditProductPage from "../admin/adminPage/editProductPage";
import CategoryPage from "../admin/adminPage/categoryPage";
import NewCategoryPage from "../admin/adminPage/newcategoryPage";
import AllusersPage from "../admin/adminPage/AllusersPage";
import AdduserPage from "../admin/adminPage/adduserPage";
import PermissionPage from "../admin/adminPage/permissionPage";
import OrderListPage from "../admin/adminPage/orderlistPage";
import OrderDetailPage from "../admin/adminPage/orderdetailPage";
import LoginPage from "../pages/loginpage";
import SignupPage from "../pages/signuppage";
import ForgetPasswordPage from "../onboarding/forgetpassword";
import ResetPasswordPage from "../onboarding/resetpassword";
import OtpVerification from "../onboarding/otp";
import ResendOTP from "../onboarding/resendOtp";
import AdminLogin from "../admin/admincomponents/adminLogin";

const Onboarding = () => (
  <div>
    {/* <Header /> */}
    <main>
      <Outlet />
    </main>
    {/* <Footercomp /> */}
  </div>
);
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
    path: "/onboarding",
    element: <Onboarding />,
    children: [
      { path: "login", element: <LoginPage />},
      { path: "signup", element: <SignupPage />},
      { path: "otpVerify", element: <OtpVerification />},
      { path: "resendotp", element: <ResendOTP />},
      { path: "forgetpassword", element: <ForgetPasswordPage />},
      { path: "resetpassword", element: <ResetPasswordPage />},
    ]
  },
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
      { index: true, element: <AdminLogin /> },
      { path: "adminDashboard", element: <AdminHome /> },
      { path: "addproduct", element: <AddProductPage />},
      { path: "productlist", element: <ProductlistPage />},
      { path: "editproduct", element: <EditProductPage />},
      { path: "categorylist", element: <CategoryPage />},
      { path: "newcategory", element: <NewCategoryPage />},
      { path: "allusers", element: <AllusersPage />},
      { path: "addnewuser", element: <AdduserPage />},
      { path: "permissionacess", element: <PermissionPage />},
      { path: "orderlist", element: <OrderListPage />},
      { path: "orderdetailoo123df", element: <OrderDetailPage />},
    ],
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>
  },
]);

function Route() {
  return <RouterProvider router={route} />;
}

export default Route;
