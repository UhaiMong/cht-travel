import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { setUser, toggleLoading } from "./features/auth/authSlice";
import ScrollToTop from "react-scroll-to-top";
import preLoader from "./assets/images/preLoader.gif";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating a 3s loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="bg-black flex items-center justify-center h-screen">
          <img src={preLoader} alt="...loading"></img>
        </div>
      ) : (
        <>
          <Toaster />
          <RouterProvider router={routes} />
          <ScrollToTop smooth />
        </>
      )}
    </div>
  );
}

export default App;
