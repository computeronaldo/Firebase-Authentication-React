import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import Dashboard, { loader as dashboardLoader } from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    loader: dashboardLoader,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <RouterProvider router={router} />
      </div>
    </Container>
  );
};

export default App;
