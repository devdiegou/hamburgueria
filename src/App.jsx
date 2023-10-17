import { HomePage } from "./pages/HomePage";
import "./container.css";
import "./reset.css"
import "./globalStyles.css";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <HomePage toast={toast}  />
      <ToastContainer />
    </>
  )
}

export default App
