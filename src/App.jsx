import Route from "./routes/Routes";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Route />
    </>
  );
};

export default App;
