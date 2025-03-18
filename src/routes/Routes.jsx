import { RouterProvider, createHashRouter, Outlet } from "react-router-dom";
import Home from "../pages/homepage";
import Header from "../components/header";
import Footercomp from "../components/footer";
import ContactUs from "../pages/contact";
import DetailPage from "../components/detail";
import Cart from "../components/cartPage";
import StartOrderPage from "../components/startOrder";
import CheckoutPage from "../components/checkout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
import UserProfile from "../components/userProfile";
import MenCollections from "../pages/men";
import WomenCollections from "../pages/women";
import ProductDetailPage from "../pages/productdetailPage";
import NotificationPage from "../admin/adminPage/notificationPage";
import ChatPagess from "../admin/adminPage/chat";
import UserNotification from "../components/userNotification";
import ScrollToTop from "../components/scrollTop";

const Onboarding = () => (
  <div>
    <ScrollToTop />
    <main>
      <Outlet />
    </main>
  </div>
);

const AppLayout = () => {

  return (
    <div>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footercomp />
    </div>
  );
};

const AdminLayout = () => (
  <div>
    <ScrollToTop />
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
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "otpVerify", element: <OtpVerification /> },
      { path: "resendotp", element: <ResendOTP /> },
      { path: "forgetpassword", element: <ForgetPasswordPage /> },
      { path: "resetpassword", element: <ResetPasswordPage /> },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "men",element: <MenCollections />},
      { path: "women", element: <WomenCollections />},
      { path: "detail/:id",element: <DetailPage />},
      { path: "cart", element: <Cart /> },
      { path: "order", element: <StartOrderPage /> },
      { path: "contact", element: <ContactUs /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "userprofile", element: <UserProfile /> },
      { path: "usernotification", element: <UserNotification /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminLogin /> },
      { path: "adminDashboard", element: <AdminHome /> },
      { path: "notification", element: <NotificationPage /> },
      { path: "chatmessage", element: <ChatPagess /> },
      { path: "addproduct", element: <AddProductPage /> },
      { path: "productlist", element: <ProductlistPage /> },
      { path: "productdetail/:id", element: <ProductDetailPage /> },
      { path: "editproduct/:id", element: <EditProductPage /> },
      { path: "categorylist", element: <CategoryPage /> },
      { path: "newcategory", element: <NewCategoryPage /> },
      { path: "allusers", element: <AllusersPage /> },
      { path: "addnewuser", element: <AdduserPage /> },
      { path: "permissionacess", element: <PermissionPage /> },
      { path: "orderlist", element: <OrderListPage /> },
      { path: "orderdetail/:id", element: <OrderDetailPage /> },
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
